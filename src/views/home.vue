<template>
  <div id='home'>
    <div>
      <img src='../assets/img/1.png'/>
    </div>
    <div id='swiper'>
      <carousel-3d class='carousel-3d' autoplay='true'
                   autoplayTimeout='4000'
                   width='200'
                   height='260'
                   border='0'
                   perspective='0'
                   space='260'>
        <slide :index="0">
          <img src="../assets/img/16.jpg"/>
        </slide>
        <slide :index="1">
          <img src="../assets/img/17.jpg"/>
        </slide>
        <slide :index="2">
          <img src="../assets/img/5.jpg"/>
        </slide>
        <slide :index="3">
          <img src="../assets/img/6.jpg"/>
        </slide>
        <slide :index="4">
          <img src="../assets/img/7.jpg"/>
        </slide>
      </carousel-3d>
    </div>
    <div class="note" hidden="hidden">公告：iOS用户如遇到闪退情况，请卸载重新安装即可。</div>
    <ul class='flex downlist'>
      <li hidden="hidden">
        <a href='javascript:void(0)'>
          <img src='../assets/img/4.png'/>
        </a>
      </li>
      <li hidden="hidden">
        <a href='javascript:void(0)'>
          <img src='../assets/img/4.png'/>
        </a>
      </li>
    </ul>
    <div class='downone'>
      <a href="http://124.222.242.16:8080/file/others/app-release-20220401061258600.apk">下载爱电影永久版（推荐）</a>
    </div>
    <div class="content">
      <p class="p2">一秒钟记住我们的备用网址：</p>
      <p class="p3"><a href="http://124.222.242.16:8082" target="_blank">http://124.222.242.16:8082</a></p>
      <div class='save' hidden="hidden">
        <a href="ios/xiaoxiao.mobileconfig">保存官网到桌面</a>
      </div>
    </div>
    <div class='footerimg'>
      <img src='../assets/img/3.png'/>
      <img src='../assets/img/2.png'/>
      <img src='../assets/img/9.png'/>
    </div>
  </div>
</template>

<script>
import {Carousel3d, Slide} from 'vue-carousel-3d';

export default {
  name: 'Home',
  components: {
    Carousel3d,
    Slide
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
#home {
  display: block;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

#home img {
  width: 100%;
  display: block;
}

#swiper {
  height: 9rem;
  width: 100%;
  background-image: url("./../assets/img/8.png");
  position: relative;
  background-size: auto;
  background-position-x: center;
}

#swiper .carousel-3d {
  position: absolute;
  left: 0;
  top: 0.9rem;
}

.note {
  text-align: center;
  width: 100%;
  color: #8313dd;
  padding: 0.2rem 0;
}

.downlist li {
  flex: 1;
  margin: 0 0.32rem;
}

.downlist li img {
  display: block;
  height: 1.3rem;
}

.downone {
  margin: 0.32rem;
}

.downone a {
  background: #455a64;
  height: 1.26rem;
  border-radius: 1.26rem;
  font-size: 0.4rem;
  line-height: 1.26rem;
}

.downone a, .save a {
  display: block;
  width: 100%;
  color: #fff;
  text-align: center;
}

.content {
  text-align: center;
  margin: 0.32rem 0;
}

.p1 {
  font-size: 0.14rem;
  font-weight: bold;
}

.p2 {
  color: #666;
  padding-top: 0.32rem;
}

.p3 a {
  display: block;
  color: #000000;
  padding-bottom: 0.2rem;
}

.save a {
  background: #FBB756;
  height: 1.5rem;
  border-radius: 1.5rem;
  font-size: 0.7rem;
  line-height: 1.5rem;
}

.footerimg img {
  display: block;
  width: 100%;
}
</style>
