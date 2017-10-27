import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

const state = {
}

const mutations = {
}

const actions = {
  questionAll ({commit}) {
    // dapatkan semua data question
    http.get('/api/reports')
    .then(({data}) => {
      commit('setQuestionAll', data)
    })
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
