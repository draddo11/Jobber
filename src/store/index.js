import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
    increment(){
     this.state.count++
    },
    decrement(){
      this.state.count--
    }
  },
  actions: {
  },
  modules: {
  }
})