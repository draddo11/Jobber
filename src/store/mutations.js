import * as types from './mutations-types'

export const mutations = {
    [types.SIGN_IN] (state, user_payload){
        state.user = user_payload
    }
}