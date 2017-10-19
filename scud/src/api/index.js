import Vue from 'Vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

var instance = axios.create();

axios.defaults.baseURL = 'http://192.168.1.123:81/ewei-user-project/api';

export default {
  localLogin: function (data) {
    return Vue.axios.post('/login', data)
  },
  localLogout: function () {
    return instance.post('/logout')
  },
  localReg: function (data) {
    return Vue.axios.post('/reg', data)
  },
  localEmail: function (data) {
    console.log(data);
    return Vue.axios.post('/sendEmail', data)
  }
}
