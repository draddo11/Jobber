import * as types from './mutations-types'

export const mutations = {
    [types.SIGN_IN] (state, user_payload){
        state.user = user_payload
    },
    [types.SIGN_OUT] (state){
        state.user={}
    },

    [types.GET_JOBS] (state,jobs_payload){
        state.jobs=jobs_payload
    },
}