<template>
  <panel title="京东智投" :class="$style.panel">
    <section :class="$style.content">
    <img src="//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120" alt="">
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
  height: 102px;
  > h4 {
    display: none;
  }
  .content {
    img {
      height: 102px;
      width: 100%;
    }
  }
}
</style>
