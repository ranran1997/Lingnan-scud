<template>
  <form v-if="showLogin" class="login" method="post" @submit.prevent="sub()">
    <div class="g-login">
      <a @click="showChange"><i class="fa fa-remove"></i></a>
      <div class="title">账号密码登录</div>
      <div class="wrap">
        <span>
          <img src="./../assets/user2.png" alt="">
        </span>
        <input class="user-input" type="text" v-model="user.name" placeholder="用户名/邮箱号">
      </div>
      <div class="wrap">
        <span>
          <img src="./../assets/password.png" alt="">
        </span>
        <input class="password-input" type="password" v-model="user.password" placeholder="密码">
      </div>
      <div v-show="error" class="error">{{error}}</div>
      <div class="forget">忘记密码？</div>
      <input type="submit" value="登录" class="login-submit">
    </div>
  </form>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    data () {
      return {
        error: false,
        isLogin: false,
        user: {
          name: '',
          password: ''
        }
      }
    },
    computed: {
      ...mapActions({
        UserLogin: 'UserLogin',
        HideLog: 'HideLog',
        ShowLogin: 'ShowLogin'
      }),
      ...mapGetters({
        ShowLogin: 'ShowLogin'
      }),
      showLogin () {
        return this.ShowLogin;
      }
    },
    methods: {
      sub () {
        if (!this.user.name || !this.user.password) {
          this.error = '输入不得为空'
        } else {
          this.$store.dispatch('UserLogin', this.user);
        }
      },
      showChange (e) {
        this.$store.dispatch('HideLog');
      }
    }
  }
</script>

<style>
  input[type = "text"], input[type = "password"], input[type = "submit"]{
    border: none;
    outline: none;
  }
  .login{
    position: fixed;
    left: 50%;
    top: 50%;
    width: 500px;
    height: auto;
    margin-left: -250px;
    margin-top: -250px;
    border-radius: 10px;
    box-shadow: -10px 0px 45px #ddd, 0px -5px 15px #ddd, 10px 0px 45px #ddd, 0px 20px 65px #ddd;
    z-index: 10;
  }
  .login-submit{
    width: 100%;
    height: 60px;
    background-color: #1199f9;
    color: #fff;
    border-radius: 5px;
    font-size: 1.4rem;
    cursor: pointer;
    margin-bottom: 20px;
  }
  .g-login{
    padding: 10px 40px;
    background-color: #fff;
  }
  .g-login .title{
    font-size: 1.6rem;
    color: #333;
    padding: 10px 0;
    margin-bottom: 50px;
  }
  .g-login .error{
    text-align: center;
    height: 30px;
    font-size: 1.4rem;
    color: red;
  }
  .g-login .forget{
    font-size: 1rem;
    color: #1199f9;
    padding: 10px 0;
  }
  .g-login .wrap{
    width: 100%;
    height: 60px;
    line-height: 100px;
    margin-bottom: 50px;
    display: flex;
  }
  .g-login .wrap span{
    width: 42px;
    height: 60px;
    padding-right: 30px;
  }
  .g-login .wrap span img{
    width: 42px;
    height: 42px;
    margin-top: 12px;
  }
  .g-login .wrap .user-input,.g-login .wrap .password-input{
    flex: 1;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    font-size: 1.4rem;
    display: inline-block;
    float: left;
  }
  .show-login-enter-active{
    transition: all .8s ease;
  }
  .show-login-leave-active{
    transition: all .8s ease;
  }
  .show-login-enter,.show-login-leave-to{
    opacity: 1;
  }
</style>
