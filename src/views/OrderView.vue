<template>
  <UpButtonPage/>
  <div class="">
    <div class="container">
      <div class="basket">
        <h1 class="basket__title">Your Order</h1>
        <div class="basket__item-list">
          <OrderCartItem v-for="product in products" :key="product.id" :product="product"/>
        </div>
        <div class="basket__subtotal">
          <div class="basket__subtotal-item">
            <div class="basket__subtotal-title">Amount by goods</div>
            <h6 class="basket__subtotal-price">{{ currency(new_total) }}$</h6>
          </div>
          <div class="basket__subtotal-item">
            <div class="basket__subtotal-title">Amount by delivery</div>
            <h6 class="basket__subtotal-price">{{ deliveryPrice }}$</h6>
          </div>

        </div>
        <div class="basket__total">
          <div class="basket__total-title">Total</div>
          <h6 class="basket__total-price">{{ currency(new_total + deliveryPrice) }}$</h6>
        </div>
      </div>
      <div class="order">
        <div class="order__title">
          <h1>Checkout Order</h1>
        </div>
        <div class="order__form">
          <h2>Contact details</h2>
          <div class="input__form name required">
            <label class="input__title" for="contact_name">
              Your Name
            </label>
            <input class="my__input" type="text" id="contact_name">
          </div>
          <div class="input__form phone required">
            <label class="input__title" for="input__form contact_phone">
              Сontact number
            </label>
            <input class="my__input" type="text" id="contact_phone">
          </div>
          <div class="input__form email">
            <label class="input__title" for="contact_email">
              Email
            </label>
            <input class="my__input" type="text" id="contact_email">
          </div>
          <h2>Delivery</h2>
          <div class="input__form shipping__address required">
            <label class="input__title" for="contact_email">
              Locality
            </label>
            <input class="my__input" type="text" id="shipping_address">
          </div>
          <div class="delivery__methods">
            <label class="method" for="method_pickup">
              <div class="method-input">
                <input name="delivery_method" class="my__input-radio" type="radio" id="method_pickup"
                       value="pickup"
                       v-model="picked">
                <span></span>
              </div>
              <div class="method-info">
                <h4>Pickup</h4>
                <h5>Delivery to the point of issue</h5>
              </div>
              <h6>0$</h6>
            </label>
            <label class="method" for="method_delivery">
              <div class="method-input">
                <input name="delivery_method" class="my__input-radio" type="radio" id="method_delivery"
                       value="delivery"
                       v-model="picked">
                <span></span>
              </div>
              <div class="method-info">
                <h4>By courier</h4>
                <h5>Home delivery by courier</h5>
              </div>
              <h6>300$</h6>
            </label>
          </div>
          <div class="payment__methods">
            <h2>Payment method</h2>
            <label class="method" for="upon_receipt">
              <div class="method-input">
                <input name="payment_method" class="my__input-radio" type="radio" id="upon_receipt" checked>
                <span></span>
              </div>
              <div class="method-info">
                <h4>Upon receipt</h4>
                <h5>Payment by credit card or cash upon receipt of the order</h5>
              </div>
            </label>
            <label class="method" for="online">
              <div class="method-input">
                <input name="payment_method" class="my__input-radio" type="radio" id="online">
                <span></span>
              </div>
              <div class="method-info">
                <h4>Online</h4>
                <h5>Payment by credit card online</h5>
              </div>
            </label>
          </div>
          <button class="confirm__order" :disabled="!products.length" @click="checkout(products)">Confirm the order</button>
          <p v-if="checkoutStatus">{{ checkoutStatus }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import UpButtonPage from "@/components/UpButtonPage";
import OrderCartItem from "@/components/OderCartItem";
import {mapActions, mapGetters, mapState} from "vuex";
import {currency} from "@/currency";

export default {
  name: "OrderView",
  components: {UpButtonPage, OrderCartItem},
  data() {
    return {
      picked: "pickup",
    }
  },
  computed: {
    deliveryPrice() {
      if (this.picked === "pickup") {
        return 0
      } else {
        return 300
      }
    },
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      new_total: 'cartTotalNewPrice'
    })
  },
  methods: {
    currency,
    ...mapActions({
          checkout: 'cart/checkout',
        }
    )
  }
}
</script>


<style lang="scss" scoped>
$base-background: rgb(123, 0, 204);
$base-background-white: rgb(155, 0, 255);
$base-grey: rgba(75, 75, 75, 0.9);
h1, h2 {
  margin: 20px 0 20px 0;
}

h3 {
  font-size: 16px;
  font-weight: normal;
  margin: 0 0 5px 0;
}

h4 {
  margin: 5px 0 5px 0;
  font-size: 20px;
  font-weight: normal;
}

h5 {
  font-weight: normal;
  color: $base-grey;
  font-size: 15px;
  margin: 5px 0 5px 0;
}

h6 {
  font-size: 20px;
  margin: 0;
  text-align: end;
}

.container {
  display: flex;
}

.basket {
  box-shadow: inset -7px 0 5px -5px #cccccc;
  width: 50%;
  padding: 15px;
  margin-right: 20px;
}

.basket__subtotal {
  border-top: 1px solid $base-grey;
  border-bottom: 1px solid $base-grey;
  padding: 10px 0 10px 0;
}

.basket__subtotal-item {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px 0 5px 0;
}

.basket__subtotal-title {
  font-size: 16px;
  flex: 1 1 content;
}

.basket__total {
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
}

.basket__total-title {
  flex: 1 1 content;
}

.basket__total-price {
  font-size: 25px;
}

.order {
  width: 50%;
}

.input__form {
  display: block;
  margin-bottom: 20px;
}

.my__input {
  width: 100%;
  border: 1px solid;
  border-radius: 12px;
  height: 40px;
  font-size: 17px;
}

.input__title {
  font-size: 17px;
  display: flex;
}

.delivery__methods {
  width: 100%;
}

.method {
  width: 100%;
  display: flex;
  align-items: center;
  margin: 10px 0 10px 0;
  padding: 10px 0 10px 0;
}

.method-info {
  flex: 1 1 content;
  padding: 5px;
}

.method-input {
  display: flex;
  align-items: center;
  flex: 0 0 36px;
}

.my__input-radio {
  display: none;
}

span {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 3px #ECEFF1;
  border: 2px solid $base-background-white;
}

input[type="radio"]:checked + span {
  background: $base-background-white;
}

.payment__method-input {
  flex: 0 1 2rem;
}

.confirm__order {
  width: 100%;
  height: 50px;
  margin: 40px 0;
  border-radius: 10px;
  background: $base-background-white;
  font-size: 17px;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
}

.required > label:after {
  content: "*";
  color: red;
  margin-left: 3px;
}

@media (max-width: 810px) {
  .container {
    display: block;
  }
  .basket {
    width: 100%;
    box-shadow: inset 0px -7px 5px -5px #cccccc;
  }
  .order {
    width: 100%;
    margin-right: 15px;
  }
}
</style>