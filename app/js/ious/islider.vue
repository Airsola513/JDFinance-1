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
            '//img12.360buyimg.com/jrpmobile/jfs/t8437/321/1758527686/40952/f66d552f/59bf1f41N50d846f9.jpg?width=750&height=320'
        },
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t8491/303/504628479/60643/100648de/59a94358N92475fca.jpg?width=750&height=320'
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
