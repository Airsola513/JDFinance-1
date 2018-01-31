<template>
  <div :class="cname">
    <swiper :options="swiperOption" :not-next-tick='swiperOption.notNextTick'>
      <swiper-slide v-for="item in items" :key="item.src">
        <router-link :to="item.href">
          <img :src="item.src" alt="">
        </router-link>
      </swiper-slide>
       <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    cname: {
      type: String,
      default: ''
    },
    swiperOption: {
      type: Object,
      default: function() {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
          notNextTick: false
        }
      }
    },
    items: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang='scss'>
@import '~swiper/dist/css/swiper.css';
</style>
