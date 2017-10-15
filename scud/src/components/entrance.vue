<template>
  <div>
    <div class="content">
      <a href="#" class="tab-login" @click="showLogin">
        <p>账号登录</p>
      </a>
      <a href="#" class="tab-register" @click="showReg">
        <p>快速注册</p>
      </a>
      <transition name="show-login">
        <v-login></v-login>
      </transition>
      <transition name="show-register">
        <v-register></v-register>
      </transition>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import login from '@/components/login'
  import register from '@/components/register'

  export default {
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
  .tab-register{
     position: fixed;
     left: 50%;
     top: 60%;
     width: 460px;
     height: 300px;
     margin-left: -230px;
     margin-top: -120px;
     background-color: #fff;
     box-shadow: -10px 0px 45px #ddd, 0px -5px 15px #ddd, 10px 0px 45px #ddd, 0px 20px 65px #ddd;
     z-index: -1;
   }
  .tab-register p{
    position: absolute;
    left: 50%;
    bottom: 20px;
    margin-left: -64px;
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
    box-shadow: -10px 0px 45px #ddd, 0px -5px 15px #ddd, 10px 0px 45px #ddd, 0px 20px 65px #ddd;
    z-index: -1;
  }
  .tab-login p{
    position: absolute;
    left: 50%;
    top: 20px;
    margin-left: -64px;
    text-align: center;
    color: #333;
    font-size: 1.6rem;
  }
</style>
