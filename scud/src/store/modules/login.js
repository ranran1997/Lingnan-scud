import {USER_SIGNIN, USER_SIGNOUT, USER_REG, DEL_RECEIVE, ShowDelReceive, SHOW_LOGIN, NOLOG, SHOW_REG, NOREG, SAVECODE, SENDCODE, SAVETIME} from '../types'
var isLoggedIn = function () {
  var token = localStorage.getItem('user')
  if (token) {
    return JSON.parse(localStorage.getItem('user'))
  } else {
    return false
  }
}
var getDelReceive = function () {
  var isDelReceive = localStorage.getItem('delReceive')
  if (isDelReceive) {
    return JSON.parse(localStorage.getItem('delReceive'))
  } else {
    return null
  }
}
var getShowDelReceive = function () {
  var isDelReceive = localStorage.getItem('delReceive')
  if (isDelReceive) {
    return true
  } else {
    return false
  }
}

const state = {
  token: isLoggedIn() || null,
  showLogin: true,
  gotoLog: false,
  showReg: false,
  code: null,
  sendEmail: false,
  sendTime: null,
  showDelReceive: getShowDelReceive(),
  delReceive: getDelReceive() || null
}

const mutations = {
  [SHOW_REG] (state) {
    console.log('show')
    state.showReg = true
    state.showLogin = false
  },
  [DEL_RECEIVE] (state, delivery) {
    localStorage.setItem('delReceive', JSON.stringify(delivery))
    state.showDelReceive = true
  },
  [ShowDelReceive] (state) {
    state.showDelReceive = true
  },
  [SENDCODE] (state) {
    state.sendEmail = true
  },
  [NOLOG] (state) {
    state.showLogin = false
  },
  [NOREG] (state) {
    state.showReg = false
  },
  [SHOW_LOGIN] (state) {
    state.showReg = false
    state.showLogin = true
  },
  [USER_SIGNIN] (state, user) {
    localStorage.setItem('user', JSON.stringify(user))
    state.token = user
  },
  [SAVECODE] (state, code) {
    state.code = code
    console.log(code)
  },
  [SAVETIME] (state, time) {
    state.sendTime = time
  },
  [USER_SIGNOUT] (state) {
    localStorage.removeItem('user')
    state.token = null
  },
  [USER_REG] (state, user) {
    localStorage.setItem('user', JSON.stringify(user))
    state.token = user
  }
}

export default {
  state,
  mutations
}
