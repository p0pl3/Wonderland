<template>
  <div class="slider__sale">
    <div class="container">
      <div class="slider__sale__container" style="position: relative;">
        <transition name="fade" tag="div" mode="out-in">
          <div>
            <img :src="currentSliderSaleImage"
                 style="width: 100%; max-height: 350px; min-height: 150px; border-radius: 15px;"/>
          </div>
        </transition>
        <a class="slider__previous" @click="previousSliderSale">&#10094;</a>
        <a class="slider__next" @click="nextSliderSale">&#10095;</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SliderSale",
  data() {
    return {
      sliderSaleImages: ["https://www.alt-msk.ru/upload/sale/a-discount-2986181_1920.jpg",
        "https://i.pinimg.com/originals/00/d0/8c/00d08c16313e2ccc8fd8d8283e755fbb.png"],
      currentSliderSaleImages: 0,
    }
  },
  methods: {
    nextSliderSale: function () {
      this.currentSliderSaleImages += 1;
    },
    previousSliderSale: function () {
      this.currentSliderSaleImages -= 1;
    },
  },
  computed: {
    currentSliderSaleImage: function () {
      return this.sliderSaleImages[Math.abs(this.currentSliderSaleImages) % this.sliderSaleImages.length];
    }
  },
  mounted() {
    setInterval(this.nextSliderSale, 5000);
  },
}
</script>

<style lang="scss" scoped>
$base-background: rgb(92, 0, 150);
$base-background-white: rgb(137, 6, 222);
$base-grey: rgba(75, 75, 75, 0.9);
.slider__previous, .slider__next {
  cursor: pointer;
  position: absolute;
  top: calc(50% - 50px);
  width: auto;
  padding: 16px;
  color: rgba(75, 75, 75, 0.75);
  font-weight: bold;
  font-size: 50px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.slider__next {
  right: 0;
}

.slider__previous {
  left: 0;
}

@media (max-width: 600px) {
  .slider__previous, .slider__next {
    font-size: 30px;
    top: calc(50% - 30px);
  }
}
</style>