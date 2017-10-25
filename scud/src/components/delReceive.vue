<template>
  <form @submit.prevent="submitDelAddr()">
    <div class="address">
      <span>
        <img src="./../assets/address.png" alt="">
      </span>
      <div class="address-wrap">
        <input type="text" v-model="delivery.city"  placeholder="请输入取货地址">
        <input type="text" v-model="delivery.detail"  placeholder="请补充取货地址具体楼层/门牌号">
      </div>
    </div>
    <div class="name">
      <span>
        <img src="./../assets/user3.png" alt="">
      </span>
      <input type="text" v-model="delivery.name"  placeholder="请输入取货联系人姓名(选填)">
    </div>
    <div class="phone">
      <span>
        <img src="./../assets/phone.png" alt="">
      </span>
      <input type="text" v-model="delivery.phone"   placeholder="请输入取货联系人电话">
    </div>
    <div v-show="error" class="error">{{error}}</div>
    <div class="button">
      <router-link to="/delivery">
        <input type="button" class="cancel" value="取消">
      </router-link>
      <input type="submit" class="ensure" value="确认">
    </div>
  </form>
</template>

<script>
  import { mapActions } from 'vuex'
  import router from './../router/index'

  export default {
    data () {
      const getDelReceiveCity = function () {
        const isDelReceive = localStorage.getItem('delReceive')
        if (isDelReceive) {
          return JSON.parse(localStorage.getItem('delReceive')).city
        } else {
          return ''
        }
      }
      const getDelReceiveDetail = function () {
        const isDelReceive = localStorage.getItem('delReceive')
        if (isDelReceive) {
          return JSON.parse(localStorage.getItem('delReceive')).detail
        } else {
          return ''
        }
      }
      const getDelReceiveName = function () {
        const isDelReceive = localStorage.getItem('delReceive')
        if (isDelReceive) {
          return JSON.parse(localStorage.getItem('delReceive')).name
        } else {
          return ''
        }
      }
      const getDelReceivePhone = function () {
        const isDelReceive = localStorage.getItem('delReceive')
        if (isDelReceive) {
          return JSON.parse(localStorage.getItem('delReceive')).phone
        } else {
          return ''
        }
      }
      return {
        error: false,
        delivery: {
          city: getDelReceiveCity(),
          detail: getDelReceiveDetail(),
          name: getDelReceiveName(),
          phone: getDelReceivePhone()
        }
      }
    },
    computed: {
      ...mapActions({
        DelReceive: 'DelReceive'
      })
    },
    methods: {
      submitDelAddr () {
        if (!this.delivery.city) {
          this.error = '请输入取货地址'
        } else if (!this.delivery.phone) {
          this.error = '请输入取货人电话'
        } else {
          this.$store.dispatch('DelReceive', this.delivery)
          router.push('/delivery')
        }
      }
    }
  }
</script>

<style scoped>
  form{
    width: 100%;
    height: 100%;
    background-color: #eee;
  }
  input{
    background-color: #eee;
  }
  .address{
    display: flex;
    width: 100%;
    height: 200px;
    border-bottom: 1px solid #ccc;
  }
  .address span{
    width: 100px;
  }
  .address span img,.name span img,.phone span img{
    width: 42px;
    height: 42px;
    margin-top: 30px;
  }
  .address .address-wrap{
    flex: 1;
  }
  .address .address-wrap input{
    width: 100%;
    height: 99px;
    box-sizing: border-box;
    display: block;
    border: none;
    outline: none;
    font-size: 1.6rem;
  }
  .address .address-wrap input:nth-child(1){
    border-bottom: 1px solid #ccc;
  }
  .name,.phone{
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #ccc;
    display: flex;
  }
  .name span,.phone span{
    width: 100px;
  }
  .name input,.phone input{
    flex: 1;
    height: 80px;
    border: none;
    outline: none;
    margin: 10px 0;
    font-size: 1.6rem;
  }
  .error{
    margin-top: 20px;
    color: red;
    font-size: 1.4rem;
  }
  .button{
    width: 100%;
    height: 100px;
    margin-top: 40px;
  }
  .button .cancel{
    display: inline-block;
    width: 180px;
    height: 80px;
    line-height: 80px;
    font-size: 1.8rem;
    color: #999;
    background-color: #fff;
    border-radius: 5px;
    margin-right: 10px;
    border: 1px solid #ccc;
  }
  .button .ensure{
    display: inline-block;
    width: 180px;
    height: 80px;
    line-height: 80px;
    font-size: 1.8rem;
    color: #fff;
    background-color: #1199f9;
    border-radius: 5px;
  }
</style>
