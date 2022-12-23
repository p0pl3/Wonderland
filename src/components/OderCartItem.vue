<template>
  <div class="basket__item">
    <img class="basket__item-image" :src="require(`@/assets/${product.img}`)">
    <div class="basket__item-description">
      <h3>{{ product.title }}</h3>

    </div>
    <div class="basket__item-price">
      <h4>{{ product.quantity }} x {{ product.new_price }}$</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasketItem",
  props: ["product"]
}
</script>

<style scoped>
.basket__item {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
}

.basket__item-image {
  width: 100px;
  height: 100px;
  align-items: center;
  align-content: center;
  background: white;
  object-fit: contain;
  flex: 0 1 100px;
}

.basket__item-description {
  font-size: 16px;
  padding: 0 10px;
  flex:1 1 90px;
}

.basket__item-price {
  text-align: right;
}

h3, h4 {
  margin: 0;
}
</style>