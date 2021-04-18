import * as types from './mutations-types'

export const signin   = ({commit}, user_payload)=>{
    commit(types.SIGN_IN , user_payload)
}

export const sigOut   = ({commit})=>{
    commit(types.SIGN_OUT  )
} 

export const getJobs = ({commit})=>{
    fetch(`http https://swapi.dev/api/people/1/`,{
        method : 'GET',
        mode: "no-cors", // 'cors' by defaul
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
     }) 
     .then(response => response.json())
      .then(json => commit(types.GET_JOBS,json))
    // commit(types.jobs)
}