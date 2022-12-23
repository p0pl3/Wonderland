/**
 * Mocking client-server processing
 */
const _products = [
    {'id': 1, 'title': 'Plush owl', 'price': 123.45, 'img': "product_1.jpeg", 'new_price': 100},
    {'id': 2, 'title': 'Plush duck', 'price': 299.99, 'img': "product_2.jpeg", 'new_price': 250},
    {'id': 3, 'title': 'Sheep', 'price': 55.55, 'img': "product_3.jpeg", 'new_price': 50},
    {'id': 4, 'title': 'Song owl', 'price': 55.55, 'img': "product_4.jpeg", 'new_price': 50},
    {'id': 5, 'title': 'Bunny', 'price': 55.55, 'img': "product_5.jpeg", 'new_price': 50},
    {'id': 6, 'title': 'Lego plane', 'price': 55.55, 'img': "product_6.jpeg", 'new_price': 50}
]

export default {
    async getProducts() {
        await wait(100)
        return _products
    },

    async buyProducts() {
        await wait(100)
        if (
            // simulate random checkout failure.
            (Math.random() > 0.5 || navigator.webdriver)
        ) {
            return
        } else {
            throw new Error('Checkout error')
        }
    }
}

function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}
