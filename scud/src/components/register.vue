<template>
  <form v-if="showReg" class="register" method="post" @submit.prevent="reg()">
    <div class="blur"></div>
    <div class="g-reg">
      <a @click="showChange"><i class="fa fa-remove"></i></a>
      <div class="title">快速注册</div>
      <div class="wrap">
        <span>
          <img src="./../assets/user2.png" alt="">
        </span>
        <input type="text" v-model="user.name" placeholder="用户名">
      </div>
      <div class="wrap">
        <span>
          <img src="./../assets/email.png" alt="">
        </span>
        <input class="email" type="text" v-model="user.email" placeholder="邮箱">
      </div>
      <div class="wrap">
        <span>
          <img src="./../assets/vcode.png" alt="">
        </span>
        <input type="text" class="v-input" v-model="user.code" placeholder="请输入验证码">
        <a href="#"  class="send" @click="send" >发送验证码</a>
      </div>
      <div class="wrap">
        <span>
          <img src="./../assets/password.png" alt="">
        </span>
        <input type="password" v-model="user.password" placeholder="请输入密码">
      </div>
      <div class="wrap">
        <span>
          <img src="./../assets/repassword.png" alt="">
        </span>
        <input type="password" v-model="user.password_r" placeholder="再次输入密码">
      </div>
      <div class="error" v-show="error">{{error}}</div>
      <div class="tips">
        <span>
          <img src="./../assets/right.png" width="12" height="12" alt="">
        </span>
        <p>我已阅读并同意《使用条款和协议》</p>
      </div>
      <input type="submit" value="提交" class="register-submit">
    </div>
  </form>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    data () {
      return {
        error: false,
        user: {
          name: '',
          email: '',
          password: '',
          password_r: '',
          code: ''
        }
      }
    },
    computed: {
      ...mapActions({
        UserReg: 'UserReg',
        HideReg: 'HideReg',
        SendEmail: 'SendEmail',
        SetTime: 'SetTime'
      }),
      ...mapGetters({
        ShowReg: 'ShowReg',
        SendEmail: 'SendEmail',
        GetCode: 'GetCode',
        GetTime: 'GetTime'
      }),
      showReg () {
        return this.ShowReg
      },
      sendEmail () {
        return this.SendEmail
      },
      getCode () {
        return this.GetCode
      },
      getTime () {
        return this.GetTime
      }
    },
    methods: {
      reg: function () {
        if (!this.user.name || !this.user.password || !this.user.password_r) {
          this.error = '输入不得为空'
        } else if (this.getCode !== this.user.code) {
          this.error = '验证码输入错误'
        } else if (this.user.password !== this.user.password_r) {
          this.error = '两次密码输入不一致'
        } else if (this.user.password.length < 3) {
          this.error = '密码长度不得小于3位'
        } else {
          this.$store.dispatch('UserReg', this.user);
        }
      },
      showChange (e) {
        this.$store.dispatch('HideReg');
      },
      send (e) {
        if (!this.user.email) {
          this.error = '邮箱不得为空'
        } else if (this.getCode) {
          // 当超过15min重新发送
          const date = new Date();
          if (((date - this.getTime) / (60.0 * 1000)) > 15) {
            this.$store.dispatch('SetTime', date);
            this.$store.dispatch('SendEmail', this.user);
          } else {
            alert('验证码已发送，请稍后再试')
          }
        } else {
          const date = new Date();
          this.$store.dispatch('SetTime', date);
          this.$store.dispatch('SendEmail', this.user);
          alert('验证码已发送，15分钟内失效，请注意查收');
        }
      }
    }
  }
</script>

<style>
  .register{
    position: fixed;
    left: 50%;
    top: 50%;
    width: 500px;
    height: auto;
    margin-left: -250px;
    margin-top: -330px;
    border-radius: 10px;
    box-shadow: -10px 0px 45px rgba(0,0,0,0.15), 0px -25px 85px rgba(0,0,0,0.15), 10px 0px 45px rgba(0,0,0,0.15), 0px 10px 25px rgba(0,0,0,0.15);
    z-index: 10;
  }
  .register-submit{
    width: 100%;
    height: 60px;
    background-color: #1199f9;
    color: #fff;
    border-radius: 5px;
    font-size: 1.4rem;
    cursor: pointer;
    margin-bottom: 20px;
  }
  .g-reg{
    padding: 10px 40px;
    background-color: #fff;
  }
  .g-reg .title{
    font-size: 1.6rem;
    color: #333;
    padding: 10px 0;
    margin-bottom: 50px;
  }
  .g-reg .error{
    text-align: center;
    height: 30px;
    font-size: 1.4rem;
    color: red;
  }
  .g-reg .wrap{
    width: 100%;
    height: 56px;
    line-height: 100px;
    margin-bottom: 30px;
    display: flex;
  }
  .g-reg .wrap .v-input{
    width: 230px;
  }
  .g-reg .wrap a.send{
    text-decoration: none;
    width: 200px;
    height: 54px;
    line-height: 54px;
    border-radius: 3px;
    font-size: 1.4rem;
    border: 1px solid #1199f9;
    color: #1199f9;
    background-color: #fff;
  }
  .g-reg .wrap span{
    width: 36px;
    height: 56px;
    padding-right: 30px;
  }
  .g-reg .wrap span img{
    width: 36px;
    height: 36px;
    margin-bottom: 5px;
  }
  .g-reg .tips{
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
    display: flex;
  }
  .g-reg .tips span{
    width: 30px;
    height: 30px;
    padding: 0 7px 0 60px;
  }
  .g-reg .tips span img{
    width: 20px;
    height: 20px;
    margin-top: 5px;
  }
  .g-reg p{
    flex: 1;
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
    display: flex;
  }
  .g-reg .wrap input{
    flex: 1;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
    font-size: 1.4rem;
    display: inline-block;
    float: left;
  }
  .show-register-enter-active{
    transition: all .8s ease;
  }
  .show-register-leave-active{
    transition: all .8s ease;
  }
  .show-register-enter,.show-register-leave-to{
    opacity: 1;
  }
</style>
