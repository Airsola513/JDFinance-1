<template>
 <div>
  <nav-header></nav-header>
  <i-slider></i-slider>
  <welfare></welfare>
  <service></service>
  <nav-footer></nav-footer>
  <nav-bar></nav-bar>
 </div>
</template>

<script>
import NavHeader from '../public/header.vue'
import iSlider from './islider.vue'
import Welfare from './welfare.vue'
import Service from './service.vue'
import NavFooter from '../public/footer.vue'
import NavBar from '../public/navbar.vue'
export default {
  data() {
    return {}
  },
  components: {
    NavHeader,
    iSlider,
    Welfare,
    Service,
    NavFooter,
    NavBar
  }
}
</script>
