<template>
  <panel title="理财精选" :class="$style.panel">
    <div :class="$style.item">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76" alt="">
      <div>
        <p :class="$style.title">月度理财</p>
        <p :class="$style.desc">预期年化收益率4.50%</p>
      </div>
      <p>去赚钱 <span>></span></p>
    </div>

    <div :class="$style.item">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76" alt="">
      <div>
        <p :class="$style.title">季度理财</p>
        <p :class="$style.desc">历史年化回报率5.50%</p>
      </div>
      <p>去赚钱 <span>></span></p>
    </div>

    <div :class="$style.item">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76" alt="">
      <div>
        <p :class="$style.title">一年理财</p>
        <p :class="$style.desc">历史年化回报率5.80%</p>
      </div>
      <p>去赚钱 <span>></span></p>
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
        color: #ff3232;
        line-height: 1.1;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
    > p {
      font-size: 28px;
      max-width: 39%;
      color: #ff801a;
      padding: 0 36px 0 20px;
      text-align: center;
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
