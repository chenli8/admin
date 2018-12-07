import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import user from './modules/user'
import saveLocal from './plugins/saveLocal'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  strict:true,
  mutations,
  actions,
  getters,
  plugins:[saveLocal],
  modules: {
    user
  }
})
