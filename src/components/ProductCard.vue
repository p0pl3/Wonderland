<template>
  <div class="product" ref="Product">
    <div class="product__image">
      <router-link :to="{name: 'ProductView'}">
        <img src="@/assets/product_1.jpeg" style="border-radius: 15px; width: 100%;">
      </router-link>
    </div>
    <div class="product__description">
      <router-link :to="{name: 'ProductView'}" class="product__title">
        <h3>Plush owl</h3>
      </router-link>
      <div class="product__price">
        <div v-if="this.product_count===0" class="prices">
          <h4 class="new__price">210$</h4>
          <h4 class="old__price">453$</h4>
        </div>
        <img v-if="this.product_count===0" class="cart__image" src="@/assets/cart-black.svg" @click="this.product_count+=1">
        <div v-if="this.product_count>0" class="product__counter">
          <span class="product__counter-minus" @click="this.product_count-=1">&#8211;</span>
          <router-link :to="{name: 'ProductsCart'}" class="product__counter-center">
            <p style="font-size: 14px">{{ "In cart " + this.product_count + " pc" }}</p>
            <p style="font-size: 12px"> Go to cart</p>
          </router-link>
          <span class="product__counter-plus" @click="this.product_count+=1">+</span>
        </div>
      </div>
    </div>
    <div class="wish__button">
      <WishButton/>
    </div>
    <div class="product__sale">
      <h5>-10%</h5>
    </div>
  </div>
</template>

<script>
import WishButton from "@/components/WishButton";

export default {

  name: "ProductCard",
  components: {WishButton},
  data() {
    return {
      product_count: 0,
    }
  }
}
</script>

<style lang="scss" scoped>
$base-background: rgb(92, 0, 150);
$base-background-white: rgb(137, 6, 222);
$base-grey: rgba(75, 75, 75, 0.9);


.product__price {
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  padding-top: 10px;
  line-height: 1.2;
}

.product__title {
  text-decoration: none;
}

.cart__image {
  box-sizing: content-box;
  border-radius: 10px;
  width: 27px;
  height: 27px;
  cursor: pointer;
  padding: 5px;
}

.cart__image:hover {
  background: rgba(137, 6, 222, 0.8);
}

.product__counter {
  display: flex;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  font-size: 20px;
  height: 44px;

  p {
    margin: 0;
  }
}

.product__counter span, .product__counter a {
  display: inline-flex;
  background: $base-background-white;
  align-content: center;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
}

.product__counter-center {
  min-width: 60%;
  flex-direction: column;
  text-align: center;
}

.count_mob {
  display: none;
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

.wish__button {
  position: absolute;
  right: 10px;
  width: 25px;
  height: 25px;
  background-color: #f5f5f5;
  border-radius: 50%;
}

.product__sale {
  position: absolute;
  left: 10px;
  background: $base-background-white;
  border-radius: 15px;

  h5 {
    font-size: 15px;
    color: white;
    margin: 0;
    padding: 5px;
  }
}

.product {
  margin: 10px;
  display: flex;
  position: relative;
  flex-direction: column;
  background: white;
  border-radius: 15px;
  max-width: 300px;
  min-width: 300px;
  padding: 10px;

  h3 {
    margin: 0;
  }

  h4 {
    margin: 0;
  }
}

.product__description {
  h4 {
    color: $base-grey;
    font-weight: 500;
  }

  h3 {
    font-size: 20px;
    color: $base-grey;
    font-weight: 500;
  }
}

.new__price {
  color: red !important;
  font-weight: 600 !important;
}

.old__price {
  text-decoration: red line-through solid 2px;
  font-size: 17px !important;
}

@media (max-width: 600px) {
  .product {
    margin: 5px;
    padding: 10px;
    min-width: 160px;
  }
  .product__description {
    h3 {
      font-size: 17px;
    }
  }
  .product__price {
    padding-top: 10px;
    font-size: 17px;
  }

  .product__counter {
    height: 38px;
  }

  .count_mob {
    display: block;
  }

  .count_pc {
    display: none;
  }

  .cart__image {
    width: 20px;
    height: 20px;
  }
  .product__sale {
    left: 5px;
    background: red;
    border-radius: 15px;

    h5 {
      font-size: 13px;
      color: white;
      margin: 0;
      padding: 3px;
    }
  }
  .old__price {
    font-size: 15px !important;
  }
}
</style>