import * as types from './mutations-types'

export const signin   = ({commit}, user_payload)=>{
    commit(types.SIGN_IN , user_payload)
}

export const sigOut   = ({commit})=>{
    commit(types.SIGN_OUT  )
} 