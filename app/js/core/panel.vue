<template>
  <div :class="[panelCls,cname]">
    <h4>-{{title}}-</h4>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    cname: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      panelCls: 'panel'
    }
  }
}
</script>

<style lang='scss'>
@import '../../css/element.scss';
.panel {
  @include panel;
}
</style>
