import Vue from 'vue'
import Vuex from 'vuex'
import logins from './moudles/login/logins'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    logins
  }
})
