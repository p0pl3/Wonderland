<template>
  <div class="banner__item">
      <img :src="require(`@/assets/${img}.jpeg`)" class="banner__image">
  </div>
</template>

<script>
export default {
  name: "BannerItem",
  props: {
    img: String
  }
}
</script>

<style lang="scss" scoped>
.banner__image{
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
</style>