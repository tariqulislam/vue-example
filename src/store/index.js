import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex,axios)

export default new Vuex.Store({
  state: {
    test: 'test 123....',
    members: [],
    rank: 40,
    successMsg: null
  },
  actions: {
    loadAllMembers ({commit}) {
        console.log('load Members')
        axios.get('http://localhost:4000/api/v1/members')
            .then(result => {
              console.log(result.data)
              let members = result.data
              commit('SET_MEMBERS', members)
            })
            .catch(error => console.log(error))
    },
    saveMembers({commit}, formData) {
    
      console.log('this is form data', formData);
     // axios.post('/api/v1/members', formData)
      commit('SET_SUCCESS_MSG', 'working')
      
    }
  },
  mutations: {
      SET_MEMBERS(state, members) {
        state.members = members
      },
      SET_SUCCESS_MSG(state, successMsg) {
        state.successMsg = successMsg
      } 
  },
  getters: {
    totalRank: state => state.rank
  }
})