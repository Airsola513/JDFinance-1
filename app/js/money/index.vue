<template>
 <div>
  <nav-header></nav-header>
  <m-slider></m-slider>
  <ada></ada>
  <recommend></recommend>
  <adb></adb>
  <money></money>
  <adc></adc>
  <nav-footer class="mfooter"></nav-footer>
  <nav-bar></nav-bar>
 </div>
</template>

<script>
import NavHeader from '../public/header.vue'
import mSlider from './mslider.vue'
import Ada from './ada.vue'
import Recommend from './recommend.vue'
import Adb from './adb.vue'
import Money from './money.vue'
import Adc from './adc.vue'
import NavFooter from '../public/footer.vue'
import NavBar from '../public/navbar.vue'
export default {
  data() {
    return {}
  },
  components: {
    NavHeader,
    mSlider,
    Ada,
    Recommend,
    Adb,
    Money,
    Adc,
    NavFooter,
    NavBar
  }
}
</script>

<style lang="scss">
.mfooter {
  ul {
    li:first-child {
      display: none;
    }
  }
}
</style>
