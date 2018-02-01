<template>
  <panel title="神券满减" :class="$style.panel">
    <section :class="$style.content">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t5842/235/8356236245/38364/2112fd7e/597a95d4Ne01da140.png?width=750&height=270" alt="">
    </section>
    
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
  height: 230px;
  > h4 {
    display: none;
  }
  .content {
    img {
      height: 230px;
      width: 100%;
    }
  }
}
</style>
