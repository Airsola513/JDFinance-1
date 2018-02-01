<template>
  <panel title="轮播图" :class="$style.panel">
    <slider :items="items" :class="$style.slider"></slider>
  </panel>
</template>

<script>
import panel from '../core/panel.vue'
import slider from '../core/slider.vue'
export default {
  data() {
    return {
      items: [
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400'
        },
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t10405/120/2592801005/36022/d8f57852/59f97c14Nfb960073.png?width=750&height=400'
        },
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400'
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

<style lang='scss' module>
@import '../../css/element.scss';
.panel {
  @include panel;
  margin-top: 120px !important;
  > h4 {
    display: none;
  }
  .slider {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>
