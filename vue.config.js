const path = require('path');
const resolve = dir => path.join(__dirname,dir);
const BASE_URL = process.env.NODE_EVN == 'production' ? '/iview-admin/' : '/'
module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL, ///1
  chainWebpack: config => {
     config.resolve.alias
      .set('@', resolve('src'))
      .set('_c',resolve('src/components/'))//2
  },
 productionSourceMap:false,
 devServer:{
   proxy:"http://localhost:8080"
 }
}
