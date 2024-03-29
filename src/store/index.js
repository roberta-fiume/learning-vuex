import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "My Custom Title",
    links: [
      'https://google.com',
      'https://youtube.com',
      'https://coursetro.com'
    ]
  },
  getters: {
    countLinks: state => {
      return state.links.length
    }
  },

  mutations: {// synchronous events
    ADD_LINK: (state, link) => {
      state.links.push(link)
    },
    REMOVE_LINK: (state, link) => {
      state.links.splice(link, 1)
    },
    REMOVE_ALL: (state) => {
      state.links = []
    }
  },

  actions: { // asynchronous actions
    removeLink: (context, link) => {
      context.commit("REMOVE_LINK", link)
    },

    removeAll({commit}) {                       // Add this
      return new Promise((resolve, reject) => {
        console.log(reject)
        setTimeout(() => {
          commit('REMOVE_ALL')
          resolve()
        }, 1500)
      })
    }
  },

  modules: {
  }
})
