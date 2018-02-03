<template>
  <panel title="底部导航" :class="$style.panel">
    <ul :class="$style.content">
      <li :class="$style.item">
        <router-link to="home">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&height=66" alt="首页">
          <p>首页</p>
        </router-link>
      </li>
      <li :class="$style.item">
        <router-link to="money">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66" alt="理财">
          <p>理财</p>
        </router-link>
      </li>
      <li :class="$style.item">
        <router-link to="ious">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66" alt="白条">
          <p>白条</p>
        </router-link>
      </li>
      <li :class="$style.item">
        <router-link to="raise">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png?width=66&height=66" alt="众筹">
          <p>众筹</p>
        </router-link>
      </li>
      <li :class="$style.item">
        <router-link to="home">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66" alt="我的">
          <p>我的</p>
        </router-link>
      </li>
    </ul>
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
  height: 100px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 !important;
  > h4 {
    display: none;
  }
  .content {
    @include flex(row);
    justify-content: space-around;
    height: 100px;
    background-color: #fff;
    .item {
      text-align: center;
      box-sizing: border-box;
      padding-top: 10px;
      a {
        text-decoration: none;
      }
      img {
        width: 44px;
        height: 44px;
      }
      p {
        font-size: 22px;
        color: #656565;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>
