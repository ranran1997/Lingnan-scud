import {USER_SIGNIN, USER_SIGNOUT, USER_REG, DEL_RECEIVE, ShowDelReceive, ADD_COMPANY, ADD_COUNT, SHOW_LOGIN, NOLOG, SHOW_REG, NOREG, SAVECODE, SENDCODE, SAVETIME} from '../types'
const isLoggedIn = function () {
  const token = localStorage.getItem('user')
  if (token) {
    return JSON.parse(localStorage.getItem('user'))
  } else {
    return false
  }
}
const getDelReceive = function () {
  const isDelReceive = localStorage.getItem('delReceive')
  if (isDelReceive) {
    return JSON.parse(localStorage.getItem('delReceive'))
  } else {
    return null
  }
}
const getShowDelReceive = function () {
  const isDelReceive = localStorage.getItem('delReceive')
  if (isDelReceive) {
    return true
  } else {
    return false
  }
}
const getAddCompany = function () {
  const isCompany = localStorage.getItem('company')
  if (isCompany) {
    return JSON.parse(localStorage.getItem('company'))
  } else {
    return false
  }
}
const getAddCount = function () {
  const isCount = localStorage.getItem('count')
  if (isCount) {
    return JSON.parse(localStorage.getItem('count'))
  } else {
    return '1'
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
  delReceive: getDelReceive() || null,
  addCompany: getAddCompany() || null,
  addCount: getAddCount() || null
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
  [ADD_COMPANY] (state, company) {
    localStorage.setItem('company', JSON.stringify(company))
  },
  [ADD_COUNT] (state, count) {
    localStorage.setItem('count', JSON.stringify(count))
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
