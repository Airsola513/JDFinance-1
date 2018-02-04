<template>
  <div :class="$style.content">

    <div :class="$style.title">
      <p>会赚钱 懂生活的人</p>
      <p>都在这里</p>
    </div>

    <p :class="$style.sub">新人首次登录领888礼包</p>

    <img src="//img12.360buyimg.com/jrpmobile/jfs/t10054/120/2165982932/56512/574e4766/59f031f3N1a75e42d.png?width=1125&height=890" alt="">
    
    <div :class="$style.dfooter">
      <div :class="$style.btn">
        <img src="//m.jr.jd.com/spe/downloadApp/images/logo.png" alt="">
        安装京东金融
      </div>
      <p>已安装，点击这里直接打开</p>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang='scss' module>
.content {
  .title {
    margin: 50px 0 16px;
    p {
      font-size: 50px;
      color: #444;
      height: 66px;
      line-height: 66px;
      padding: 0 75px;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .sub {
    font-size: 26px;
    color: #999;
    height: 38px;
    line-height: 38px;
    text-align: center;
  }

  > img {
    width: 512px;
    height: 404px;
    display: block;
    margin: 0 auto;
  }

  .dfooter {
    position: absolute;
    width: 500px;
    left: 50%;
    bottom: 20px;
    margin-left: -250px;
    .btn {
      width: 500px;
      height: 100px;
      padding: 0 20px;
      line-height: 100px;
      font-size: 28px;
      color: #fff;
      text-align: center;
      background: #f55c33;
      background-image: linear-gradient(270deg, #f55c33 0, #ee2d1b 75%);
      box-shadow: 0 12px 32px 0 rgba(255, 159, 135, 0.6);
      box-sizing: border-box;
      img {
        width: 54px;
        height: 54px;
        margin-right: 24px;
        vertical-align: middle;
      }
    }
    p {
      font-size: 28px;
      color: #f4552f;
      margin-top: 20px;
      text-align: center;
    }
  }
}
</style>
