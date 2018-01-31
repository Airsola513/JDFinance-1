<template>
  <panel title="新品推荐" :class="$style.panel">
    <div :class="$style.more">更多尖货 ></div>
    <section :class="$style.content">
      <slider :swiperOption='swiperOption' :items="items" cname="productSlider"></slider>
    </section>
  </panel>
</template>

<script>
import panel from '../core/panel.vue'
import slider from '../core/slider.vue'
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 2.3,
        spaceBetween: 30,
        freeMode: true
      },
      items: [
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t14641/180/1638965003/42812/2f4a85a1/5a54aadbN5269a1f1.jpg?width=335&height=421'
        },
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t14584/14/1620812582/49401/2a98f763/5a54aaeeNde89f852.jpg?width=335&height=421'
        },
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t15670/84/1493061629/40102/9f58843d/5a54aaecNecedcefd.jpg?width=335&height=421'
        },
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t15175/239/1652258993/41684/2827c8e3/5a54ab0fN0c596f31.jpg?width=335&height=421'
        }
      ]
    }
  },
  components: {
    panel,
    slider
  }
}
</script>

<style lang="scss">
.productSlider {
  .swiper-container {
    box-sizing: border-box;
    padding: 0 24px;
    .swiper-slide {
      a {
        display: inline-block;
        width: 100%;
        img {
          width: 250px;
          height: 314px;
        }
      }
    }
  }
}
</style>


<style lang='scss' module>
@import '../../css/element.scss';
.panel {
  @include panel;
  position: relative;
  .more {
    max-width: 40%;
    font-size: 28px;
    color: #999;
    height: 112px;
    line-height: 112px;
    margin-right: 32px;
    background-size: 18px 28px;
    position: absolute;
    top: 0;
    right: 0px;
  }
}
</style>
