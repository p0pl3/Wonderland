<template>
  <UpButtonPage/>
  <SliderSale/>
  <SpecialProduct direction="row-reverse"/>
  <SliderProduct/>
  <InfoBanner/>
  <SliderProduct/>
  <SliderBanner/>
</template>
<script>
import UpButtonPage from "@/components/UpButtonPage";
import SliderSale from "@/components/SliderSale";
import SliderProduct from "@/components/SliderProduct";
import InfoBanner from "@/components/InformationBanner";
import SpecialProduct from "@/components/SpecialProduct";
import SliderBanner from "@/components/SliderBanner";

export default {
  name: 'HomeView',
  components: {SliderProduct, SliderSale, UpButtonPage, InfoBanner, SpecialProduct, SliderBanner},
}
</script>

<style lang="scss" scoped>

</style>
