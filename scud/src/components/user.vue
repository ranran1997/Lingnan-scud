<template>
  <div>
    <div class="header">
      <div class="basic-info"></div>
      <div class="balance-info">
        <div class="coupons"></div>
        <div class="balance"></div>
        <div class="recharge"></div>
      </div>
    </div>
    <div class="record">
      <div class="order">我的订单</div>
      <div class="receipt">收货记录</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'user'
  }
</script>

<style>
  html{
    font-size: 16px;
  }
  .header{
    width: 100%;
    height: 520px;
    background-color: #fff;
    position: relative;
  }
  .basic-info{
    width: 240px;
    height: 240px;
    position: absolute;
    top: 40px;
    left: 50%;
    margin-left: -120px;
    background-color: #aaa;
  }
  .balance-info{
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 200px;
  }
  .balance-info div{
    flex: 1;
    margin: 3px;
    background-color: #bbb;
  }
  .record{
    width: 100%;
    height: 120px;
    margin-top: 40px;
  }
  .record div{
    height: 60px;
    background-color: #999;
  }
</style>
