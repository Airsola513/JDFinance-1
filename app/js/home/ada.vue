<template>
  <panel title="抢白条" :class="$style.panel">
    <router-link to="home">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t18256/22/396481685/49556/5952e7a0/5a705ee2N89c0ead8.jpg?width=750&height=280" alt="">
    </router-link>
    
  </panel>
</template>

<script>
import panel from '../core/panel.vue'
export default {
  data() {
    return {}
  },
  components: {
    panel
  }
}
</script>

<style lang='scss' module>
@import '../../css/element.scss';
.panel {
  @include panel;
  > h4 {
    display: none;
  }
  height: 240px;
  img {
    width: 100%;
    height: 240px;
  }
}
</style>
