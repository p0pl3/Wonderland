<template>
  <div class="special__banner__item">
    <img src="@/assets/banner_2.jpeg" class="banner__image">
  </div>
</template>

<script>
export default {
  name: "SpecialBannerItem",
  props: {
    height: String
  }
}
</script>

<style lang="scss" scoped>

.banner__image {
  border-radius: 15px;
  height: 715px;
  width: 100%;
  object-fit: cover;
}

.special__banner__item {
  min-width: 160px;
}

@media (max-width: 600px) {
  .banner__image {
    height: 290px;
  }
}
</style>