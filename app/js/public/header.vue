<template>
  <div :class="$style.header">
    <span :class="$style.left">注册 | 登录</span>
    <router-link to="download" :class="$style.right">
     APP下载
    </router-link> 
  </div>
</template>

<script>
import panel from '../core/panel.vue'
export default {
  data() {
    return {}
  }
}
</script>

<style lang='scss' module>
.header {
  z-index: 3;
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  background: #f9f9f9 url('//m.jr.jd.com/spe/qyy/main/images/jr-logo.png')
    center center no-repeat;
  background-size: auto 50%;
  .left {
    font-size: 28px;
    color: #666;
    display: block;
    height: 30px;
    line-height: 30px;
    position: absolute;
    top: 50%;
    margin-top: -15px;
    left: 24px;
  }
  .right {
    font-size: 24px;
    min-width: 120px;
    height: 56px;
    line-height: 56px;
    text-decoration: none;
    margin-top: -28px;
    background: #f04752;
    color: #fff;
    border-radius: 2px;
    text-align: center;
    position: absolute;
    top: 50%;
    right: 24px;
  }
}
</style>
