import {getAppName} from '../api/api'
const actions={
  // updateAppName({commit}){
  //   getAppName().then(res=>{
  //    const {info:{appName}} = res;
  //    commit('SET_NAME',appName)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
  async updateAppName({commit}){
    const {info:{appName}} = await getAppName();
      commit('SET_NAME',appName);
  }
}
export default actions;
