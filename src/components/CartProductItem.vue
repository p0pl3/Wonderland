<template>
  <div class="cart__product-item">
    <div style="display: flex; align-items: center;">
      <img :src="require(`@/assets/${product.img}`)" style="height: 100%; width:100px">
      <div class="product-item__description">
        <h2 class="product-item__title">{{ product.title }}</h2>
        <h3 class="total_price-hidden"> {{ currency(product.quantity * product.new_price) }}</h3>
        <div class="product-item__price">
          <h3 class="new__price">{{ product.new_price }}$</h3>
          <h5 class="old__price">{{ product.price }}$</h5>
        </div>
        <div class="product__counter">
          <span @click="decrementItemQuantity(product)" style="padding-left: 10px">&#8211;</span>
          <span>{{ product.quantity }} </span>
          <span @click="incrementItemQuantity(product)" style="padding-right: 10px">+</span>
        </div>
      </div>
    </div>
    <div style="display: flex">

      <h2 class="total_price">{{ currency(product.quantity * product.new_price) }}</h2>

      <div class="product-item__controls">
        <wish-button/>
        <img src="@/assets/delete.svg" @click="deleteProductFromCart(product)" style="cursor: pointer" width="30"
             height="30" alt="">
      </div>
    </div>

  </div>
</template>

<script>
import WishButton from "@/components/WishButton";
import {currency} from "@/currency";
import {mapActions} from "vuex";

export default {
  name: "CartProductItem",
  components: {WishButton},
  props: ["product"],
  data() {
    return {
      product_count: 1
    }
  },
  methods: {
    currency,
    ...mapActions({
          checkout: 'cart/checkout',
          deleteProductFromCart: 'cart/deleteProductFromCart',
          decrementItemQuantity: 'cart/decrementItemQuantity',
          incrementItemQuantity: 'cart/incrementItemQuantity'
        }
    )
  }
}
</script>

<style lang="scss" scoped>
$base-background-white: rgb(155, 0, 255);

.product-item__description h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

.product-item__title {
line-height: 1.1;
}

.product-item__price {
  line-height: 1;
}

.total_price {
  align-self: center;
  margin: 0 15px 0 0;
}

.total_price-hidden {
  display: none;
  font-size: 20px;
  margin: 0;
}

.new__price {
  color: red !important;
  font-weight: 600 !important;
  line-height: 1;
}

.old__price {
  text-decoration: red line-through solid 2px;
  line-height: 1;
}

.cart__product-item {
  display: flex;
  padding: 10px;
  background: white;
  border-radius: 15px;
  margin-bottom: 10px;
  justify-content: space-between;
  height: 150px;

}

.cart__product-item:last-child {
  margin-bottom: 0;
}

.product-item__controls {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-item__description {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

}

.product__counter {
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  background: $base-background-white;
  border-radius: 10px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100px;
}

.product__counter span {
  margin: 0;
  color: white;
  font-weight: bolder;
  font-size: 24px;
}

@media (max-width: 540px) {
  h2 {
    font-size: 27px;
  }
  h3 {
    font-size: 20px;
  }
  h5 {
    font-size: 13px;
  }
  .total_price {
    display: none;
  }
  .total_price-hidden {
    display: block;
  }
}
</style>