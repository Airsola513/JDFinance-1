<template>
  <panel title="文字轮播" :class="$style.panel">
    <section :class="$style.content">
      <swiper :options="swiperOption">
        <swiper-slide>签到领流量，1元500M！<span>></span></swiper-slide>
        <swiper-slide>百万白条券免费送，速来领取！！<span>></span></swiper-slide>
        <swiper-slide>签到领流量，1元500M！<span>></span></swiper-slide>
      </swiper>
    </section>
    
  </panel>
</template>

<script>
import panel from '../core/panel.vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        autoplay: true,
        loop: true
      }
    }
  },
  components: {
    panel,
    swiper,
    swiperSlide
  }
}
</script>

<style lang="scss">
.swiper-container-vertical {
  height: 72px;
  .swiper-slide {
    font-family: PingFangSC-Medium;
    font-size: 28px;
    color: #333;
    span {
      color: #ddd;
      float: right;
      margin-right: 20px;
    }
  }
}
</style>


<style lang='scss' module>
@import '../../css/element.scss';
.panel {
  @include panel;
  margin-top: 120px !important;
  > h4 {
    display: none;
  }
  .content {
    height: 72px;
    line-height: 72px;
    overflow: hidden;
    padding-left: 178px;
    background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left
      top no-repeat;
  }
}
</style>
