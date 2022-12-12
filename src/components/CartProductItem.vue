<template>
  <div class="cart__product-item">
    <div style="display: flex; align-items: center">
      <img src="@/assets/product_item_1.jpeg" style="height: 100%">
      <div class="product-item__description">

        <div class="product-item__info">
          <h3>Plush duck</h3>
        </div>
        <div class="product-item__price">
          <h3>340$</h3>
        </div>
        <div class="product__counter">
          <span @click="this.reduceCounter" style="padding-left: 10px">&#8211;</span>
          <span>{{ this.product_count }} </span>
          <span @click="this.product_count+=1" style="padding-right: 10px">+</span>
        </div>
      </div>
    </div>
    <div class="product-item__controls">
      <wish-button/>
      <img src="@/assets/delete.svg" width="30" height="30" alt="">
    </div>
  </div>
</template>

<script>
import WishButton from "@/components/WishButton";

export default {
  name: "CartProductItem",
  components: {WishButton},
  data() {
    return {
      product_count: 1
    }
  },
  methods: {
    reduceCounter() {
      if (this.product_count > 0) {
        this.product_count -= 1;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$base-background-white: rgb(155, 0, 255);

.product-item__description h3 {
  margin: 0;
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
}

.product__counter span {
  margin: 0;
  color: white;
  font-weight: bolder;
  font-size: 24px;
}
</style>