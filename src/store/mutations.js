import vue from 'vue';
const mutations={
  SET_NAME(state, params) {
   // state.appName = params.appname
   state.appName = params;
  },
  SET_ADDNAME(state, params) {
    vue.set(state,'addName',params)
   },
  CHANGEINPUVALUE(state,params){
    state.inputValue = params;
   }
}
export default mutations;
