<template>
  <panel title="In货推荐" :class="$style.panel">
    <section :class="$style.content">

      <div :class="$style.item" v-for="item in items" :key="item.catory">
        <img :src="item.catory" alt="">

        <section :class="$style.list">

          <div :class="$style.product" v-for="product in item.list" :key="product.img">
            <img :src="product.img" alt="">
            <p :class="$style.title">{{product.title}}</p>
            <p :class="$style.price"><span>{{product.price}}</span>起</p>
            <article>
              <div :class="$style.wrapper">
                <div :class="$style.inner" :style="{width:product.progress+'%'}"></div>
              </div>
              <p>{{product.progress}}%</p>
            </article>
            <p :class="$style.choice" v-if="product.choice">精选</p>
          </div> 

        </section>

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
          catory:
            '//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
          list: [
            {
              img:
                '//img30.360buyimg.com/cf/s250x250_jfs/t16150/165/674827881/130789/7de1f069/5a3a04b0N4e3d246c.jpg',
              title: '骨传导耳机',
              price: '19.00',
              progress: 385,
              choice: true
            },
            {
              img:
                '//img30.360buyimg.com/cf/s250x250_jfs/t15514/150/953212838/145464/850c2d0f/5a448bc7Nade1a7c5.jpg',
              title: '未来游戏装备',
              price: '159.00',
              progress: 999,
              choice: false
            }
          ]
        },

        {
          catory:
            '//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
          list: [
            {
              img:
                '//img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg',
              title: '蓝牙音箱',
              price: '29.00',
              progress: 0,
              choice: false
            },
            {
              img:
                '//img30.360buyimg.com/cf/s250x250_jfs/t14767/339/1285461444/50279/8ee27acb/5a4c3a82N3cff563e.jpg',
              title: '全球漫游WiFi卡',
              price: '65.00',
              progress: 335,
              choice: false
            }
          ]
        },

        {
          catory:
            '//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
          list: [
            {
              img:
                '//img30.360buyimg.com/cf/s250x250_jfs/t8245/192/196081959/46158/74227a9a/59a26d4bNddd40149.jpg',
              title: '遵义虾子土豆片',
              price: '1.00',
              progress: 0,
              choice: false
            },
            {
              img:
                '//img30.360buyimg.com/cf/s250x250_jfs/t10993/26/1955036662/116896/13538743/59ec19ecN5efa5c7d.jpg',
              title: '新疆黄杏干',
              price: '35.00',
              progress: 0,
              choice: false
            }
          ]
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
    .item {
      @include flex;
      padding-bottom: 40px;
      > img {
        width: 100%;
        height: 170px;
      }
      .list {
        @include flex(row);
        padding: 0 20px 0;
        .product {
          @include flex;
          width: 50%;
          height: 396px;
          box-sizing: border-box;
          text-align: center;
          position: relative;
          > img {
            width: 180px;
            height: 180px;
            margin: 44px auto 20px;
          }
          .title {
            font-family: PingFangSC-Medium;
            font-size: 28px;
            font-weight: 700;
            height: 40px;
            line-height: 40px;
            color: #444;
            text-align: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .price {
            font-family: PingFangSC-Semibold;
            font-size: 20px;
            color: #999;
            top: -2px;
            span {
              font-weight: 700;
              font-size: 36px;
              color: #ff3232;
              margin-right: 8px;
              &:before {
                content: '￥';
                font-size: 28px;
                color: #ff3232;
              }
            }
          }
          article {
            @include flex(row);
            justify-content: space-around;
            height: 30px;
            padding: 0 24px 18px;
            .wrapper {
              width: 70%;
              height: 10px;
              margin-top: 10px;
              background: #f6e6e6;
              border-radius: 22px;
              .inner {
                font-weight: 700;
                max-width: 100%;
                height: 10px;
                background-image: linear-gradient(
                  270deg,
                  #f55 1%,
                  #ff9c31 100%
                );
                border-radius: 22px;
              }
            }
            p {
              width: 20%;
              font-weight: 700;
              font-size: 24px;
              color: #999;
            }
          }
          .choice {
            font-family: PingFangSC-Medium;
            font-size: 20px;
            color: #ff0000;
            text-align: center;
            padding: 4px 8px;
            background-image: linear-gradient(-35deg, #c1c1c1 0, #acacac 100%);
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
    }
  }
}
</style>
