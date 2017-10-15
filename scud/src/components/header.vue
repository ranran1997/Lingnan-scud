<template>
  <div class="header-wrap">
    <div class="title">岭南飞毛腿</div>
    <div>
      <div @click="show = !show" class="user-icon">
        <img src="./../assets/user1.png" width="40" height="40" alt="">
      </div>
      <transition name="show-user">
        <v-user v-if="show" class="user-wrap"></v-user>
      </transition>
      <div @click="show = !show" class="mask" v-if="show"></div>
    </div>
  </div>
</template>

<script>
  import user from '@/components/user'

  export default {
    name: 'header',
    components: {
      'v-user': user
    },
    data () {
      return {
        show: false
      }
    }
  }
</script>

<style>
  .header-wrap{
    width: 100%;
    height: 80px;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
  }
  .title{
    height: 80px;
    line-height: 80px;
    text-align: center;
    font-size: 2rem;
    letter-spacing: 3px;
  }
  .user-icon{
    position: fixed;
    left: 0;
    top: 0;
    width: 100px;
    height: 60px;
    font-size: 3rem;
  }
  .user-icon img{
    margin-top: 20px;
  }
  .mask{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.6);
    z-index: 9;
  }
  .user-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 80%;
    height: 100%;
    z-index: 10;
    background-color: #eee;
  }
  .show-user-enter-active {
    transition: all .8s ease;
  }
  .show-user-leave-active {
    transition: all .8s ease;
  }
  .show-user-enter,.show-user-leave-to{
    left: -80%;
    opacity: 1;
  }
</style>
