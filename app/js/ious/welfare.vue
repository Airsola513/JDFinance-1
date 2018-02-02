<template>
  <panel title="理财精选" :class="$style.panel">
    <div :class="$style.item">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120" alt="">
      <div>
        <p :class="$style.title">开通白条</p>
        <p :class="$style.desc">送188元礼包</p>
      </div>
      <p>立即开通 <span>></span></p>
    </div>

    <div :class="$style.item">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120" alt="">
      <div>
        <p :class="$style.title">白条闪付</p>
        <p :class="$style.desc">新手享158元礼包</p>
      </div>
      <p>随机立减 <span>></span></p>
    </div>

    <div :class="$style.item">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120" alt="">
      <div>
        <p :class="$style.title">白条提额</p>
        <p :class="$style.desc">金融app专享提额礼包</p>
      </div>
      <p>去提额 <span>></span></p>
    </div>
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
  .item {
    @include flex(row);
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 140px;
    img {
      width: 88px;
      height: 88px;
      margin-left: 32px;
    }
    > div {
      width: 224px;
      .title {
        font-size: 32px;
        color: #333;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .desc {
        font-size: 24px;
        color: #999;
        line-height: 1.1;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    > p {
      font-size: 28px;
      width: 150px;
      color: #ff801a;
      padding: 0 36px 0 20px;
      text-align: right;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      span {
        color: #999;
        font-size: 32px;
      }
    }
  }
}
</style>
