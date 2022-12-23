<template>
  <div>
    <div class="container">
      <div class="cart__title">
        <h2>Cart</h2>
      </div>
      <div class="cart__article">
        <p v-show="!products.length">
          <i>Please add some products to cart.</i>
        </p>
        <div v-show="products.length" class="cart__products">
          <CartProductItem v-for="product in products" :key="product.id" :product="product"/>
        </div>
        <div class="cart__info" v-show="products.length">
          <div class="cart__description-price" >
            <div class="cart__description-title">
              <p>Products (3) </p>
              <p>{{ currency(total) }}$ </p>
            </div>
            <div class="cart__description-title">
              <p>Discount</p>
              <p style="color: red">{{ currency(new_total - total) }}$ </p>
            </div>
            <div class="cart__description-title">
              <p style="font-size: 24px">Total</p>
              <p style="font-size: 30px">{{ currency(new_total) }}$ </p>
            </div>
          </div>
          <router-link  class="cart__info__confirm-order" :disabled="!products.length" :to="{ name: 'confirmOrder'}">Checkout</router-link>
          <div class="cart__promo">
            <input class="cart__promo-input" placeholder="promo code">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartProductItem from "@/components/CartProductItem";
import {mapActions, mapGetters, mapState} from 'vuex'
import {currency} from '@/currency'

export default {
  name: "CartGrid",
  components: {CartProductItem},
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice',
      new_total: 'cartTotalNewPrice'
    })
  },
  methods: {
    currency,
    ...mapActions({
          checkout: 'cart/checkout'
        }
    )
  }
}
</script>

<style lang="scss" scoped>
$base-background: rgb(123, 0, 204);
$base-background-white: rgb(155, 0, 255);
$base-grey: rgba(75, 75, 75, 0.9);

.cart__promo-placeholder {
  margin: 0;
  font-weight: 100;
  font-size: 18px;
}

.cart__description-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart__promo {
  width: 100%;
}

.cart__description-price {
  width: 100%;
  margin-top: 15px;
}

.cart__info__confirm-order {
  display: block;
  text-align: center;
  font-size: 26px;
  margin: 10px 0;
  width: 100%;
  padding: 10px;
  background: $base-background-white;
  border-radius: 15px;
  text-decoration: none;
  color: white;
}

.cart__promo-input {
  text-indent: 10px;
  width: 100%;
  font-size: 25px;
  height: 50px;
  border-radius: 15px;
  border: 1px solid grey;
}

.cart__article {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}

.cart__products {
  width: 66%;
  border-radius: 15px;
}

.cart__info {
  width: 33%;
  padding: 10px;
  background: white;
  border-radius: 15px;
  position: sticky;
  top: 15px;

  p {
    margin: 0 0 10px 0;
  }
}

@media screen and (max-width: 820px) {
  .cart__products {
    width: 100%;
  }

  .cart__info {
    width: 100%;
    margin-top: 10px;
    position: sticky;
    top: 0;
  }
}
</style>