<template>
  <div>
    <div class="user">
      <div class="basic-info">
        <div class="avatar">
          <img :src="{ avatarUrl }" width="80" height="80" alt="">
        </div>
        <div class="email">{{ email }}</div>
      </div>
    </div>
    <div class="balance-info">
      <div class="coupons">
        <div class="value">6</div>
        <div class="name">优惠券</div>
      </div>
      <div class="balance">
        <div class="value">0.00</div>
        <div class="name">账号余额</div>
      </div>
      <div class="recharge">
        <div class="value">充值优惠</div>
        <div class="name">去充值</div>
      </div>
    </div>
    <div class="record">
      <div class="order">
        <span class="icon-paste"></span>
        <span class="record-name">我的订单</span>
        <span class="icon-chevron-right"></span>
      </div>
      <div class="receipt">
        <span class="icon-clipboard"></span>
        <span class="record-name">收货记录</span>
        <span class="icon-chevron-right"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'user',
    data () {
      const getUserEmail = function () {
        const isUser = localStorage.getItem('user')
        if (isUser) {
          return JSON.parse(localStorage.getItem('user')).email
        } else {
          return ''
        }
      }
      const getAvatarUrl = function () {
        const isUser = localStorage.getItem('user')
        if (isUser) {
          return JSON.parse(localStorage.getItem('user')).avaterUrl
        } else {
          return ''
        }
      }
      return {
        avatarUrl: getAvatarUrl(),
        email: getUserEmail()
      }
    }
  }
</script>

<style>
  html{
    font-size: 16px;
  }
  .user{
    width: 100%;
    height: 320px;
    background-color: #fff;
    position: relative;
    background: url("./../assets/user-back.jpg") no-repeat;
    background-size: cover;
  }
  .basic-info{
    width: 240px;
    height: 200px;
    position: absolute;
    top: 80px;
    left: 50%;
    margin-left: -120px;
  }
  .avatar{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #fff;
    margin: 0 auto;
  }
  .email{
    margin-top: 20px;
    font-size: 1.5rem;
    color: #fff;
  }
  .balance-info{
    margin-top: 40px;
    display: flex;
    width: 100%;
    height: 140px;
    background-color: #fff;
  }
  .balance-info>div:nth-child(1),.balance-info>div:nth-child(2){
    border-right: 1px dashed #999;
  }
  .balance-info>div{
    flex: 1;
    padding: 40px 0;
    line-height: 1;
  }
  .balance-info>div .value{
    margin-bottom: 10px;
    font-size: 1.4rem;
  }
  .balance-info>div .name{
    font-size: 1rem;
  }
  .record{
    width: 100%;
    height: 120px;
    margin-top: 40px;
  }
  .record div{
    height: 70px;
    background-color: #fff;
  }
  .record-name{
    width: 200px;
    height: 70px;
    line-height: 70px;
    font-size: 1.6rem;
    text-align: left;
    float: left;
  }
  .icon-paste,.icon-clipboard{
    width: 70px;
    height: 70px;
    line-height: 70px;
    float: left;
    font-size: 1.6rem;
  }
  .icon-chevron-right{
    width: 70px;
    height: 70px;
    line-height: 70px;
    float: right;
    font-size: 1.6rem;
  }
  .order{
    border-bottom: 1px solid #ddd;
  }
</style>
