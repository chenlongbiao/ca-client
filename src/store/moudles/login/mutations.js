import {SIGN_IN, SIGN_UP} from '../../mutation-types'

const mutations = {
  [SIGN_UP] (state, res) {
    // state.signup_states = list
    state.signUpstate = res.data.resState
    console.log(state)
  },
  [SIGN_IN] (state, res) {
    // state.signup_states = list
    state.signInstate = res.data
    console.log(state)
  }
}

export default mutations
