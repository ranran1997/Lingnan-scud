<template>
  <div id="app">
    <v-header></v-header>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="slide-item"><img src="./assets/01.png" alt=""></swiper-slide>
      <swiper-slide class="slide-item"><img src="./assets/02.jpg" alt=""></swiper-slide>
      <swiper-slide class="slide-item"><img src="./assets/03.jpg" alt=""></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="service">
      <div class="main">
        <div class="delivery">
          <p>我要拿快递</p>
        </div>
        <div class="errand">
          <p>我要跑腿</p>
        </div>
      </div>
      <div class="minor">
        <div class="shipping">
          <div class="icon-wrap"></div>
          <span>发货记录</span>
        </div>
        <div class="receive">
          <div class="icon-wrap"></div>
          <span>收货记录</span>
        </div>
        <div class="discounts">
          <div class="icon-wrap"></div>
          <span>充值优惠</span>
        </div>
        <div class="command">
          <div class="icon-wrap"></div>
          <span>口令优惠券</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import header from '@/components/header'

  export default {
    name: 'app',
    data () {
      return {
        swiperOption: {
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000,
          direction: 'horizontal',
          scrollbarHide: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next'
        }
      }
    },
    components: {
      swiper,
      swiperSlide,
      'v-header': header
    }
  }
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  }
  .slide-item{
    height: 300px;
  }
  .slide-item img{
    width: 100%;
    height: 100%;
  }
  .service{
    width: 100%;
    height: 600px;
    margin-top: 10px;
  }
  .service .main{
    height: 420px;
    margin-bottom: 10px;
  }
  .service .main .delivery{
    width: 96%;
    height: 200px;
    margin: 0 auto 10px;
    border-radius: 10px;
    background-color: orange;
    text-align: center;
    font-size: 4rem;
  }
  .service .main .errand{
    width: 96%;
    height: 200px;
    margin: 0 auto;
    border-radius: 10px;
    background-color: orange;
    text-align: center;
    font-size: 4rem;
  }
  .service .minor{
    display: flex;
  }
  .service .minor div{
    flex: 1;
    text-align: center;
    font-size: 2rem;
  }
  .service .minor div .icon-wrap{
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin:0 auto  5px;
    background-color: aqua;
  }
  .service .minor div.shipping{

  }
</style>
