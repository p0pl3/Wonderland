<template>
  <div>
    <div class="container">
      <div class="product__container">
        <div class="product__gallery">
          <SliderImages/>
        </div>
        <div class="product__info">
          <div class="product__rating"></div>
          <h1 class="product__title">Toy</h1>
          <h2 class="product__price">300 $</h2>
          <div class="product__controls">
            <button v-if="this.product_count===0" class="buy__button" @click="this.product_count+=1">
              <h>Add to cart</h>
              <img class="cart__image" src="@/assets/cart.svg">
            </button>
            <div v-if="this.product_count>0" class="product__counter">
              <span class="product__counter-minus" @click="this.product_count-=1">-</span>
              <router-link :to="{name: 'ProductsCart'}" class="product__counter-center">
                <p style="font-size: 14px">In cart {{ this.product_count }} pc</p>
                <p style="font-size: 12px"> Go to cart</p>
              </router-link>
              <span class="product__counter-plus" @click="this.product_count+=1">+</span>
            </div>
            <div class="wish__button">
              <WishButton/>
            </div>
          </div>
          <div class="product__characteristics">
            <h3>Characteristics</h3>
            <div class="characteristic">
              <p class="characteristic-name">Material type</p>
              <p class="characteristic-type">Plush</p>
            </div>
            <div class="characteristic">
              <p class="characteristic-name">Chapter</p>
              <p class="characteristic-type">toy for kids</p>
            </div>
            <div class="characteristic">
              <p class="characteristic-name">Age range</p>
              <p class="characteristic-type">y.o. 6+</p>
            </div>

          </div>
          <div class="product__description">
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed metus dolor. Phasellus sollicitudin viverra eros quis feugiat. Duis cursus commodo justo, nec pretium ipsum euismod id. Vivamus vitae ullamcorper magna. Nunc id volutpat purus. Morbi interdum eget dolor fringilla pellentesque. Fusce cursus ut sapien vel consequat. Phasellus iaculis fermentum nunc, in ullamcorper massa aliquet vel. Pellentesque ultrices ornare lorem, id dapibus arcu iaculis lacinia. Vivamus at pharetra nibh. Proin ante ex, porttitor feugiat nibh at, consequat viverra risus. Nulla blandit in libero eget eleifend. Maecenas placerat ac purus eleifend dictum. Vestibulum consectetur dignissim metus, et commodo sem tincidunt vel. In vestibulum, quam a venenatis vulputate, orci magna sagittis erat, id vulputate lacus mauris quis nunc.
            </p>
          </div>
          <div class="product__reviews">
            <h3>Reviews</h3>
            <button class="button-write__review">Write a feedback</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderImages from "@/components/SliderImages";
import WishButton from "@/components/WishButton";

export default {
  name: "ProductView",
  components: {SliderImages, WishButton},
  data() {
    return {
      product_count: 0
    }
  }
}
</script>

<style lang="scss" scoped>
$base-background: rgb(123, 0, 204);
$base-background-white: rgb(155, 0, 255);
$base-grey: rgba(75, 75, 75, 0.9);

h1, h2 {
  font-size: 30px;
  margin: 0 0 40px 0;
}

h3 {
  font-size: 25px;
  margin: 0 0 10px 0;
}

p {
  font-size: 16px;
  margin: 0;
  line-height: 1.5;
}

.product__container {
  display: flex;
  flex-direction: row-reverse;
  align-items: start;
  justify-content: space-between;
  margin: 0 0 20px 0;
  padding: 0;
}

.product__gallery {
  width: 50%;
  position: sticky;
  top: 10px;
}

.product__info {
  width: 45%;
}

.product__controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  align-items: center;
}

.product__compare {
  margin-bottom: 40px;
}

.buy__button {
  min-width: 85%;
  height: 50px;
  border-radius: 10px;
  background: $base-background-white;
  font-size: 20px;
  color: #FFFFFF;
  border: none;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.product__counter {
  display: flex;
  cursor: pointer;
  min-width: 85%;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
}

.product__counter span, a {
  display: inline-flex;
  background: $base-background-white;
  align-content: center;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
}

.product__counter-center {
  min-width: 65%;
  flex-direction: column;
  text-align: center;
}

.product__counter-plus {
  width: 100%;
  margin-left: 2px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}

.product__counter-minus {
  width: 100%;
  margin-right: 2px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}

.cart__image {
  width: 21px;
  margin-left: 10px;
}

.wish__button {
  height: 35px;
  display: flex;
}

.product__characteristics {
  width: 100%;
  margin-bottom: 20px;
}

.characteristic {
  margin-bottom: 10px;
}

.characteristic-name {
  color: #999999;
  font-size: 14px;
}

.product__description {
  margin-bottom: 20px;
}

.button-write__review {
  height: 40px;
  border-radius: 10px;
  background: $base-background-white;
  font-size: 16px;
  color: #FFFFFF;
  border: none;
  padding: 0 20px;
}

@media (max-width: 1000px) {
  .product__container {
    display: block;
    align-items: normal;
  }
  .product__gallery, .product__info {
    width: 100%;
    position: relative;
  }
  .product__info {
    padding: 0 20px;
  }
  .product__gallery {
    margin-bottom: 40px;
  }
}
</style>