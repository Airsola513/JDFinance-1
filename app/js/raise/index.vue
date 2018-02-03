<template>
 <div>
  <nav-header></nav-header>
  <r-slider></r-slider>
  <daily></daily>
  <in></in>
  <more></more>
  <nav-footer class="rfooter"></nav-footer>
  <nav-bar></nav-bar>
 </div>
</template>

<script>
import NavHeader from '../public/header.vue'
import rSlider from './rslider.vue'
import Daily from './daily.vue'
import In from './in.vue'
import More from './more.vue'
import NavFooter from '../public/footer.vue'
import NavBar from '../public/navbar.vue'
export default {
  data() {
    return {}
  },
  components: {
    NavHeader,
    rSlider,
    Daily,
    In,
    More,
    NavFooter,
    NavBar
  }
}
</script>

<style lang="scss">
.rfooter {
  ul {
    li:first-child {
      display: none;
    }
  }
}
</style>
