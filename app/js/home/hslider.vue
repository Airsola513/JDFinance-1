<template>
  <panel title="轮播图" :class="$style.panel">
      <slider :items="items" :class="$style.slider"></slider>
      <section :class="$style.list">
        <div :class="$style.item" v-for="item in enters" :key="item.title">
          <router-link to="home">
            <img :src="item.img" :alt="item.title">
            <p>{{item.title}}</p>
          </router-link>
        </div>
      </section>
  </panel>
</template>

<script>
import panel from '../core/panel.vue'
import Slider from '../core/slider.vue'
export default {
  data() {
    return {
      items: [
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t14335/208/2172633235/45500/4d244029/5a705e00Na2d58972.jpg?width=750&height=320'
        },
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t14332/238/2138249205/38542/5ab1285e/5a705e33N044ebd37.jpg?width=750&height=320'
        },
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t15847/264/1995518146/41194/62c1d71a/5a705e49N96f9205b.jpg?width=750&height=320'
        },
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t16219/140/1949476632/47712/7012c399/5a705e91N075d4a83.jpg?width=750&height=320'
        }
      ],
      enters: [
        {
          img:
            '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
          title: '优惠券'
        },
        {
          img:
            '//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
          title: '领红包'
        },
        {
          img:
            '//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
          title: '抢钢镚'
        },
        {
          img:
            '//img12.360buyimg.com/jrpmobile/jfs/t4618/115/2179710654/11347/bf520df/58ec9d84Nfd169001.png?width=132&height=132',
          title: '领京豆'
        },
        {
          img:
            '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
          title: '白条提额'
        }
      ]
    }
  },
  components: {
    panel,
    Slider
  }
}
</script>

<style lang='scss' module>
@import '../../css/element.scss';
.panel {
  @include panel;
  margin-top: 120px !important;
  > h4 {
    display: none;
  }
  .slider {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .list {
    @include flex(row);
    justify-content: space-around;
    padding-top: 40px;
    .item {
      width: 128px;
      height: 144px;
      text-align: center;
      a {
        text-decoration: none;
      }
      img {
        width: 90px;
        height: 90px;
      }
      p {
        font-size: 26px;
        text-align: center;
        color: #666;
        margin-top: 6px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      &:nth-child(3) {
        p {
          color: #ff0000;
        }
      }
    }
  }
}
</style>
