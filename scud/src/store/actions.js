import api from '../api'
import {
  USER_SIGNOUT, DEL_RECEIVE, SHOW_LOGIN, NOLOG, SHOW_REG, NOREG, SAVECODE, SAVEORDER,
  SAVETIME, ADD_COMPANY, ShowDelReceive, ADD_COUNT
} from './types'

export const UserLogin = (data) => {
  api.localLogin(data).then(function (response) {
    if (response.data.type === true) {
      window.location = '/homepage'
    } else {
      alert('请输入正确的用户名和密码')
    }
  })
    .catch(function (error) {
      console.log(error)
    })
}
export const DelReceive = ({ commit }, data) => {
  commit(DEL_RECEIVE, data)
  commit(ShowDelReceive)
}
export const AddCompany = ({ commit }, data) => {
  commit(ADD_COMPANY, data)
}
export const AddCount = ({ commit }, data) => {
  commit(ADD_COUNT, data)
}
export const ShowLogin = ({ commit }) => {
  commit(SHOW_LOGIN)
}
export const ShowReg = ({ commit }) => {
  commit(SHOW_REG)
}
export const UserLogout = ({ commit }) => {
  api.localLogout().then(function (response) {
    commit(USER_SIGNOUT)
    window.location = '/'
  })
    .catch(function (error) {
      console.log(error)
    })
}

export const UserReg = ({ commit }, data) => {
  api.localReg(data).then(function () {
    alert('请到你的邮箱点击激活链接，激活后才可登录')
    commit(SHOW_LOGIN)
  })
    .catch(function (error) {
      console.log(error)
    })
}

export const SendEmail = ({ commit }, data) => {
  api.localEmail(data).then(function () {
    alert('right')
    commit(SAVECODE, null)
    commit(SAVETIME, null)
  })
  .catch(function (error) {
    console.log(error)
  })
}
export const DeliveryOrder = ({ commit }, data) => {
  api.localDeliveryOrder(data).then(function (response) {
    console.log(response.data.type)
    if (response.data.type === true) {
      window.location = '/homepage'
      commit(SAVEORDER, response.data.data)
    } else {
      alert('请求异常')
    }
  })
    .catch(function (error) {
      console.log(error)
    })
}

export const SetTime = ({ commit }, data) => {
  commit(SAVECODE, data)
}
export const HideLog = ({ commit }) => {
  commit(NOLOG)
}
export const HideReg = ({ commit }) => {
  commit(NOREG)
}
