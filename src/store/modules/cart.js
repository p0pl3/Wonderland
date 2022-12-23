import shop from '../../api/shop'
import nested from './nested'

// initial state
// shape: [{ id, quantity }]
const state = () => ({
    items: [], checkoutStatus: null
})

// getters
const getters = {
    cartProducts: (state, getters, rootState) => {
        return state.items.map(({id, quantity}) => {
            const product = rootState.products.all.find(product => product.id === id)
            return {
                id: product.id,
                title: product.title,
                price: product.price,
                img: product.img,
                quantity,
                new_price: product.new_price
            }
        })
    },

    cartTotalPrice: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity
        }, 0)
    },

    cartTotalNewPrice: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {
            return total + product.new_price * product.quantity
        }, 0)
    }
}

// actions
const actions = {
    async checkout({commit}, products) {
        commit('setCheckoutStatus', null)
        try {
            await shop.buyProducts(products)
            commit('setCheckoutStatus', 'successful')
            commit('emptyCart')
        } catch (e) {
            console.error(e)
            commit('setCheckoutStatus', 'failed')
        }
    },
    addProductToCart({state, commit}, product) {
        commit('setCheckoutStatus', null)

        const cartItem = state.items.find(item => item.id === product.id)
        if (!cartItem) {
            commit('pushProductToCart', {id: product.id})
        } else {
            commit('incrementItemQuantity', cartItem)
        }
    }, deleteProductFromCart({state, commit}, cartItem) {
        commit('deleteProductFromCart', cartItem.id)
        if (state.items.length === 0) {
            commit('setEmptyStatus', true)
        }
    },
    incrementItemQuantity({state, commit}, product) {
        const cartItem = state.items.find(item => item.id === product.id)
        commit("incrementItemQuantity", cartItem)
    },
    decrementItemQuantity({state, commit}, product) {
        const cartItem = state.items.find(item => item.id === product.id)
        if (cartItem.quantity === 1) {
            commit('deleteProductFromCart', cartItem.id)
        } else {
            commit("decrementItemQuantity", cartItem)
        }
    },
}

// mutations
const mutations = {
    pushProductToCart(state, {id}) {
        state.items.push({
            id, quantity: 1
        })
    },

    deleteProductFromCart(state, cartItemId) {
        state.items = state.items.filter(item => item.id !== cartItemId)
    },

    incrementItemQuantity(state, {id}) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++
    },

    decrementItemQuantity(state, {id}) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity--
    },

    setEmptyStatus(state, status) {
        state.isEmpty = status
    },

    emptyCart(state) {
        state.items = []
        state.isEmpty = true
    },

    setCheckoutStatus(state, status) {
        state.checkoutStatus = status
    }
}

export default {
    namespaced: true, state, getters, actions, mutations, modules: {
        nested
    }
}
