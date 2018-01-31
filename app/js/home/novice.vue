<template>
  <panel title="新手特权" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <h5>下载APP<span :class="$style.red">送888元礼包</span></h5>
        <p :class="$style.gray">新手专享</p>
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt="">
      </div>
      <div :class="$style.item">
        <ul>
          <li>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200" alt="">
            <h5 :class="$style.red">领128元新手礼包</h5>
            <p :class="$style.gray">立即开通</p>
          </li>
          <li>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100" alt="">
            <h5>打白条<span :class="$style.red">享免息</span></h5>
            <p :class="$style.gray">立即开通享豪礼</p>
          </li>
        </ul>
      </div>
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
  > h4 {
    border: 1px solid #ddd;
  }
  .content {
    @include flex(row);
    .item {
      box-sizing: border-box;
      width: 50%;
      height: 290px;
      &:first-child {
        padding: 32px 20px;
        text-align: center;
        border-right: 1px solid #ddd;
      }

      > img {
        width: 132px;
        height: 132px;
      }
      .red {
        color: #ff0000;
      }
      .gray {
        color: #999;
      }
      h5 {
        font-size: 26px;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      p {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 0 20px;
        margin-top: 6px;
        font-size: 24px;
        line-height: 32px;
      }

      li {
        width: 100%;
        height: 144px;
        box-sizing: border-box;
        text-align: center;
        padding: 32px 28px;
        &:first-child {
          border-bottom: 1px solid #ddd;
        }
        img {
          width: 80px;
          height: 80px;
          float: right;
        }
      }
    }
  }
}
</style>
