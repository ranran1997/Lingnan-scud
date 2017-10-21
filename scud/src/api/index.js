import Vue from 'Vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

var instance = axios.create();

axios.defaults.baseURL = 'http://192.168.1.118:8080/project/api';

export default {
  localLogin: function (data) {
    return Vue.axios.post('/login', data)
  },
  localLogout: function () {
    return instance.post('/logout')
  },
  localReg: function (data) {
    return Vue.axios.post('/ensureRegister', data)
  },
  localEmail: function (data) {
    console.log(data);
    return Vue.axios.post('/register', data)
  },
  localDeliveryOrder: function (data) {
    return Vue.axios.post('/order', data)
  }
}
