import * as types from '../../mutation-types'
import axios from 'axios'
import baseURL from '../../utils/httpApi'

export const signup = function ({commit}, list) {
  return axios.post(baseURL + 'signUp', list).then(res => {
    commit(types.SIGN_UP, res)
  }).catch(error => {
    console.log(error)
  })
}
export const signin = function ({commit}, list) {
  return axios.post(baseURL + 'signIn', list).then(res => {
    commit(types.SIGN_IN, res)
  }).catch(error => {
    console.log(error)
  })
}
