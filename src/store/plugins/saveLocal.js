export default store => {
  console.log('初始化')
  // if(localStorage.state) store.state = JSON.parse(localStorage.state);
  if(localStorage.state) store.replaceState(JSON.parse(localStorage.state));
  store.subscribe((mutation,state) => {
   localStorage.state = JSON.stringify(state);
  })
}
