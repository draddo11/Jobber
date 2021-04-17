import * as types from './mutations-types'

export const signin   = ({commit}, user_payload)=>{
    commit(types.SIGN_IN , user_payload)
}

export const sigOut   = ({commit})=>{
    commit(types.SIGN_OUT  )
} 

export const getJobs = ({commit})=>{
    fetch(`https://jobs.github.com/positions?description=python&location=new+york`,{
        method : 'GET',
        mode: "no-cors" // 'cors' by defaul
     }) 
     .then(response => response.json())
      .then(json => commit(types.GET_JOBS,json))
    // commit(types.jobs)
}