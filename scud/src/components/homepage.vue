<template>
  <div>
    <v-header></v-header>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="slide-item"><img src="./../assets/01.png" alt=""></swiper-slide>
      <swiper-slide class="slide-item"><img src="./../assets/03.jpg" alt=""></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="service">
      <div class="main">
          <router-link class="delivery" to="/delivery">
            <div>
              <img src="./../assets/package.png" width="120" height="120" alt="">
            </div>
            <p>我要拿快递</p>
          </router-link>
          <router-link class="errand" to="/errand">
            <p>我要跑腿</p>
            <div>
              <img src="./../assets/scud.png" width="120" height="120" alt="">
            </div>
          </router-link>
      </div>
      <div class="minor">
        <div class="shipping">
          <div class="icon-wrap">
            <img src="./../assets/delivery.png" alt="">
          </div>
          <span>发货记录</span>
        </div>
        <div class="receive">
          <div class="icon-wrap">
            <img src="./../assets/receive.png" alt="">
          </div>
          <span>收货记录</span>
        </div>
        <div class="discounts">
          <div class="icon-wrap">
            <img src="./../assets/discounts.png" alt="">
          </div>
          <span>充值优惠</span>
        </div>
        <div class="command">
          <div class="icon-wrap">
            <img src="./../assets/command.png" alt="">
          </div>
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
    name: 'homepage',
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
  a{
    text-decoration: none;
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
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .service .main .delivery{
    width: 96%;
    height: 200px;
    margin: 0 auto 10px;
    display: flex;
    border-radius: 10px;
      background-color: #1199f9;
    text-align: center;
    font-size: 4rem;
    color: #fff;
  }
  .delivery div{
     flex: 2;
   }
  .delivery div img{
    margin-top: 40px;
  }
  .delivery p{
    flex: 3;
    margin-top: 70px;
    font-size: 2.5rem;
    letter-spacing: 15px;
  }
  .service .main .errand{
    width: 96%;
    height: 200px;
    margin: 0 auto;
    border-radius: 10px;
    background-color: #ff8d00;
    text-align: center;
    font-size: 4rem;
    color: #fff;
    display: flex;
  }
  .errand div{
    flex: 2;
  }
  .errand div img{
    margin-top: 40px;
  }
  .errand p{
    flex: 3;
    margin-top: 70px;
    font-size: 2.5rem;
    letter-spacing: 15px;
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
    margin:0 auto 5px;
  }
  .service .minor div .icon-wrap img{
    width: 80px;
    height: 80px;
  }
  .service .minor div.shipping{

  }
  .service .minor div span{
    margin-top: 10px;
    font-size: 1.5rem;
  }
</style>
