<template>
  <div>
    <div class="content">
      <div class="total-title">岭南飞毛腿</div>
      <transition name="show-login-link">
        <a v-if="showLoginLink" href="#" class="tab-login" @click="showLogin(); showLoginLink = !showLoginLink; showRegisterLink = !showRegisterLink;">
          <p>账号密码登录</p>
        </a>
      </transition>
      <transition name="show-register-link">
        <a v-if="showRegisterLink" href="#" class="tab-register" @click="showReg(); showRegisterLink = !showRegisterLink; showLoginLink = !showLoginLink">
          <p>快速注册</p>
        </a>
      </transition>
      <transition name="show-login">
        <v-login></v-login>
      </transition>
      <transition name="show-register">
        <v-register></v-register>
      </transition>
      <div class="back"></div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import login from '@/components/login'
  import register from '@/components/register'

  export default {
    data () {
      return {
        showLoginLink: false,
        showRegisterLink: true
      }
    },
    computed: {
      ...mapGetters({
        UserInfo: 'UserInfo'
      }),
      ...mapActions({
        UserLogout: 'UserLogout',
        ShowLogin: 'ShowLogin',
        ShowReg: 'ShowReg'
      }),
      user () {
        return this.UserInfo
      }
    },
    methods: {
      showLogin (e) {
        this.$store.dispatch('ShowLogin')
      },
      showReg (e) {
        this.$store.dispatch('ShowReg')
      },
      redirect () {
        this.$router.push({ path: '/' })
      }
    },
    components: {
      'v-login': login,
      'v-register': register
    }
  }
</script>

<style>
  .content{
    width: 100%;
    height: 100%;
    background-color: #ccc;
  }
  .total-title{
    position: fixed;
    left: 50%;
    top: 50px;
    margin-left: -300px;
    width: 600px;
    height: 100px;
    color: #ffffff;
    font-size: 3rem;
    letter-spacing: 15px;
  }
  .back{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("./../assets/back.jpg") no-repeat;
    background-size: cover;
    z-index: -2;
  }
  .tab-register{
     position: fixed;
     left: 50%;
     top: 60%;
     width: 460px;
     height: 300px;
     margin-left: -230px;
     margin-top: -130px;
     background-color: #fff;
     box-shadow: -10px 0px 45px rgba(0,0,0,0.07), 0px -5px 15px rgba(0,0,0,0.07), 10px 0px 45px rgba(0,0,0,0.07), 0px 20px 65px rgba(0,0,0,0.07);
     z-index: -1;
   }
  .tab-register p{
    position: absolute;
    left: 50%;
    bottom: 20px;
    margin-left: -53px;
    text-align: center;
    color: #333;
    font-size: 1.6rem;
  }
  .tab-login{
    position: fixed;
    left: 50%;
    top: 30%;
    width: 460px;
    height: 300px;
    margin-left: -230px;
    margin-top: -170px;
    background-color: #fff;
    box-shadow: -10px 0px 45px rgba(0,0,0,0.07), 0px -5px 15px rgba(0,0,0,0.07), 10px 0px 45px rgba(0,0,0,0.07), 0px 20px 65px rgba(0,0,0,0.07);
    z-index: -1;
  }
  .tab-login p{
    position: absolute;
    left: 50%;
    top: 20px;
    margin-left: -75px;
    text-align: center;
    color: #333;
    font-size: 1.6rem;
  }
  .show-login-link-enter-active {
    transition: all .4s ease;
  }
  .show-login-link-enter,.show-login-link-leave-to{
    transform: scale(0.9) translateY(20px);
    opacity: 1;
  }
  .show-register-link-enter-active {
    transition: all .4s ease;
  }
  .show-register-link-enter,.show-register-link-leave-to{
    transform: scale(0.9) translateY(-20px);
    opacity: 1;
  }
</style>
