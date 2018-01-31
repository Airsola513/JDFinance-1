<template>
  <panel title="理财精选" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item" v-for="item in items" :key="item.title">
        <p :class="$style.title">{{item.title}}<span>{{item.sub}}</span></p>
        <p :class="$style.num">{{item.num}}</p>
        <p :class="$style.desc">{{item.desc}}</p>
      </div>
    </section>
  </panel>
</template>

<script>
import panel from '../core/panel.vue'
export default {
  data() {
    return {
      items: [
        {
          title: '定期理财',
          sub: '理财首选',
          num: '5.60%',
          desc: '历史年化回报率'
        },
        {
          title: '小白理财',
          sub: '理财首选',
          num: '4.22%',
          desc: '7日年化收益率'
        },
        {
          title: '月月盈',
          sub: '养老保障',
          num: '5%',
          desc: '七日年化收益率'
        },
        {
          title: '小白基金',
          sub: '天天赚钱',
          num: '4.27%',
          desc: '7日年化收益率'
        }
      ]
    }
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
  .content {
    @include flex(row);
    .item {
      @include flex;
      position: relative;
      justify-content: center;
      box-sizing: border-box;
      width: 50%;
      height: 218px;
      padding-left: 32px;
      .title {
        font-family: PingFangSC-Medium;
        color: #333;
        font-weight: 700;
        font-size: 30px;
        display: block;
        float: left;
        height: 42px;
        line-height: 42px;
        span {
          display: inline-block;
          box-sizing: border-box;
          width: 112px;
          height: 34px;
          margin-left: 14px;
          line-height: 34px;
          text-align: center;
          font-size: 24px;
          color: #ff5155;
          border: 1px solid #ff5155;
        }
      }
      .num {
        font-weight: 700;
        font-size: 44px;
        height: 58px;
        line-height: 58px;
        color: #ff5155;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .desc {
        font-size: 24px;
        height: 34px;
        line-height: 34px;
        color: #999;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      &:after {
        content: ' ';
        display: block;
        width: 1px;
        height: 136px;
        background-color: #ddd;
        position: absolute;
        top: 50%;
        margin-top: -68px;
        right: 10px;
      }
      &:nth-child(2n) {
        &:after {
          display: none;
        }
      }
    }
    &:after {
      content: ' ';
      display: block;
      height: 0;
      width: 100%;
      border-bottom: 1px solid #ddd;
      position: relative;
      top: -218px;
    }
  }
}
</style>
