<template>
  <div>
    <v-header></v-header>
    <div class="delContent">
      <div class="tab">
        <div class="sub-title">我要拿快递</div>
        <div class="tab-target">
          <span class="target">我要跑腿</span>
          <span class="icon-chevron-right"></span>
        </div>
      </div>
      <div class="form">
        <div class="form-item company" @click="showCompany = !showCompany" >
        <span class="icon-wrap">
          <img src="./../assets/company.png" alt="">
        </span>
          <span class="item-name">快递公司</span>
          <span class="icon-chevron-right"></span>
          <span class="item-value">{{ picked }}</span>
        </div>
        <transition name="company-form">
          <div v-if="showCompany" class="company-form">
            <div class="company-wrap">
              <div class="company-icon">
                <img src="./../assets/company.png" alt="">
              </div>
              <p>请选择快递公司</p>
              <form action="">
                <table>
                  <tr>
                    <td @click="addClass(1)" :class="{ active: 1==defaultClass }">
                      <input type="radio" id="one" value="顺丰" v-model="picked">
                      <label for="one">顺丰</label>
                    </td>
                    <td @click="addClass(2)" :class="{ active: 2==defaultClass }">
                      <input type="radio" id="two" value="圆通" v-model="picked">
                      <label for="two">圆通</label>
                    </td>
                  </tr>
                  <tr>
                    <td @click="addClass(3)" :class="{ active: 3==defaultClass }">
                      <input type="radio" id="three" value="中通" v-model="picked">
                      <label for="three">中通</label>
                    </td>
                    <td @click="addClass(4)" :class="{ active: 4==defaultClass }">
                      <input type="radio" id="four" value="韵达" v-model="picked">
                      <label for="four">韵达</label>
                    </td>
                  </tr>
                  <tr>
                    <td @click="addClass(5)" :class="{ active: 5==defaultClass }">
                      <input type="radio" id="five" value="国通" v-model="picked">
                      <label for="five">国通</label>
                    </td>
                    <td @click="addClass(6)" :class="{ active: 6==defaultClass }">
                      <input type="radio" id="six" value="申通" v-model="picked">
                      <label for="six">申通</label>
                    </td>
                  </tr>
                  <tr>
                    <td @click="addClass(7)" :class="{ active: 7==defaultClass }">
                      <input type="radio" id="seven" value="其他" v-model="picked">
                      <label for="seven">其他</label>
                    </td>
                  </tr>
                </table>
              </form>
              <div class="confirm" @click="showCompany = !showCompany" v-if="showCompany">确认</div>
            </div>
            <div class="close" @click="showCompany = !showCompany" v-if="showCompany">
              <span class="left"></span>
              <span class="right"></span>
            </div>
          </div>
        </transition>
        <div class="form-item weight" @click="showWeight = !showWeight">
        <span class="icon-wrap">
          <img src="./../assets/weight.png" alt="">
        </span>
          <span class="item-name">物品重量</span>
          <span class="icon-chevron-right"></span>
          <span class="item-value">{{ selected }}</span>
        </div>
        <transition name="weight-form">
          <div v-if="showWeight" class="weight-form">
            <div class="weight-wrap">
              <div class="weight-icon">
                <img src="./../assets/weight.png" alt="">
              </div>
              <p>请选择物品重量</p>
              <div class="confirm" @click="showWeight = !showWeight" v-if="showWeight">确认</div>
            </div>
            <div class="close" @click="showWeight = !showWeight" v-if="showWeight">
              <span class="left"></span>
              <span class="right"></span>
            </div>
          </div>
        </transition>
        <div class="form-item delTime">
        <span class="icon-wrap">
          <img src="./../assets/delTime.png" alt="">
        </span>
          <span class="item-name">送达时间</span>
          <span class="icon-chevron-right"></span>
          <span class="item-value">{{ choosed }}</span>
        </div>
        <transition name="delTime-form">
          <div v-if="showDelTime" class="delTime-form">
            <div class="delTime-wrap">
              <div class="delTime-icon">
                <img src="./../assets/delTime.png" alt="">
              </div>
              <p>请选择送达时间</p>
              <div class="confirm" @click="showDelTime = !showDelTime" v-if="showDelTime">确认</div>
            </div>
            <div class="close" @click="showDelTime = !showDelTime" v-if="showDelTime">
              <span class="left"></span>
              <span class="right"></span>
            </div>
          </div>
        </transition>
        <div class="form-item address">
        <span class="icon-wrap">
          <img src="./../assets/address.png" alt="">
        </span>
          <span class="item-name">收货地址</span>
        </div>
        <div @click="showCompany = !showCompany" class="company-mask" v-if="showCompany"></div>
        <div @click="showWeight = !showWeight" class="weight-mask" v-if="showWeight"></div>
        <div @click="showDelTime = !showDelTime" class="delTime-mask" v-if="showDelTime"></div>
      </div>
      <div class="next">下一步</div>
      <div class="pricerule">计价规则</div>
    </div>
  </div>
</template>

<script>
  import header from '@/components/header'

  export default {
    name: 'delivery',
    data () {
      return {
        showCompany: false,
        showWeight: false,
        showDelTime: false,
        picked: '',
        selected: '',
        choosed: '',
        defaultClass: -1
      }
    },
    methods: {
      addClass: function (index) {
        this.defaultClass = index
      }
    },
    components: {
      'v-header': header
    }
  }
</script>

<style>
  body{
    background-color: #eee;
  }
  input[type = "radio"] {
    display: none;
  }
  .delContent{
    background-color: #eee;
  }
  .tab{
    width: 100%;
    height: 60px;
    background-color: #fff;
  }
  .sub-title{
    display: inline-block;
    height: 60px;
    line-height: 60px;
    float: left;
    font-size: 1.6rem;
    padding-left: 20px;
  }
  .tab-target{
    display: inline-block;
    height: 60px;
    line-height: 60px;
    float: right;
    font-size: 1.4rem;
  }
  .form{
    width: 100%;
    height: 600px;
    margin: 10px 0 30px;
  }
  .form-item{
    width: 100%;
    height: 100px;
    background-color: #fff;
    margin-bottom: 15px;
  }
  .form-item .icon-wrap{
    width: 100px;
    height: 100px;
    line-height: 100px;
    float: left;
  }
  .form-item .icon-wrap img{
    width: 40px;
    height: 40px;
    margin-top: 30px;
  }
  .form-item span.item-name{
    width: auto;
    height: 100px;
    line-height: 100px;
    font-size: 1.6rem;
    float: left;
  }
  .form-item span.item-value{
    width: auto;
    height: 100px;
    line-height: 100px;
    font-size: 1.8rem;
    float: right;
    margin-right: 20px;
  }
  .form-item span.icon-chevron-right{
    width: auto;
    height: 100px;
    line-height: 100px;
    font-size: 1.4rem;
    float: right;
  }
  .close{
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
  .close span{
    display: inline-block;
    width: 40px;
    height: 2px;
    background-color: #333;
  }
  .close span:nth-child(1){
    transform: rotate(45deg) translateY(14px) translateX(14px);
  }
  .close span:nth-child(2){
    transform: rotate(-45deg);
  }
  .company-form{
    position: fixed;
    left: 50%;
    top: 50%;
    width: 500px;
    height: 640px;
    margin-left: -250px;
    margin-top: -320px;
    background-color: #fff;
    border-radius: 8px;
    z-index: 5;
  }
  .weight-form{
    position: fixed;
    left: 50%;
    top: 50%;
    width: 500px;
    height: 640px;
    margin-left: -250px;
    margin-top: -320px;
    background-color: #fff;
    border-radius: 8px;
    z-index: 5;
  }
  .delTime-form{
    position: fixed;
    left: 50%;
    top: 50%;
    width: 500px;
    height: 640px;
    margin-left: -250px;
    margin-top: -320px;
    background-color: #fff;
    border-radius: 8px;
    z-index: 5;
  }
  .company-form-enter-active{
    transition: all .8s ease;
  }
  .company-form-enter,.company-form-leave-to{
    opacity: 1;
  }
  .weight-form-enter-active{
     transition: all .8s ease;
   }
  .weight-form-enter,.weight-form-leave-to{
    opacity: 1;
  }
  .delTime-form-enter-active{
    transition: all .8s ease;
  }
  .delTime-form-enter,.delTime-form-leave-to{
    opacity: 1;
  }
  .company-wrap,.weight-wrap,delTime-wrap{
    padding: 40px;
  }
  .company-icon,.weight-icon,delTime-icon{
    width: 100%;
    height: 150px;
  }
  .company-icon img,.weight-icon img{
    width: 94px;
    height: 94px;
    margin-top: 20px;
  }
  .company-wrap form{
    width: 420px;
    margin-top: 30px;
  }
  .company-wrap form table td{
    width: 208px;
    height: 60px;
    font-size: 1.4rem;
    background-color: #ddd;
    border: 1px transparent solid;
  }
  .company-wrap form table td.active{
    width: 208px;
    height: 60px;
    font-size: 1.4rem;
    background-color: #fff;
    color: #1199f9;
    border: 1px #1199f9 solid;
  }
  .confirm{
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #1199f9;
    text-align: center;
    border-radius: 5px;
    font-size: 1.6rem;
    color: #fff;
    margin-top: 30px;
  }
  .form .company-mask,.form .weight-mask,.form .delTime-mask{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,.4);
    z-index: 3;
  }
  .next{
    width: 90%;
    height: 80px;
    line-height: 80px;
    margin: 0 auto;
    background-color: #1199f9;
    border-radius: 5px;
    color: #fff;
    font-size: 2rem;
  }
  .pricerule{
    font-size: 1.2rem;
    color: #1199f9;
    margin-top: 10px;
  }
</style>
