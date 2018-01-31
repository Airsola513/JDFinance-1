<template>
 <div>
  <nav-header></nav-header>
  <h-slider></h-slider>
  <novice></novice>
  <ada></ada>
  <borrow></borrow>
  <money></money>
  <product></product>
  <life></life>
  <nav-footer></nav-footer>
  <nav-bar></nav-bar>
 </div>
</template>

<script>
import NavHeader from '../public/header.vue'
import hSlider from './hslider.vue'
import Novice from './novice.vue'
import Ada from './ada.vue'
import Borrow from './borrow.vue'
import Money from './money.vue'
import Product from './product.vue'
import Life from './life.vue'
import NavFooter from '../public/footer.vue'
import NavBar from '../public/navbar.vue'
export default {
  data() {
    return {}
  },
  components: {
    NavHeader,
    hSlider,
    Novice,
    Ada,
    Borrow,
    Money,
    Product,
    Life,
    NavFooter,
    NavBar
  }
}
</script>
