<template>
  <div>
    this.email
    <div>
      <!-- {{userName}} -->
      {{appversion}}
      {{age}}
      {{appName}}
    </div>
    <button @click="changeEmail">chenge</button>
    <button @click="addModule">动态添加模块</button>
    <div>{{todolist}}</div>
    <input v-model="inputValue">
    {{inputValue}}
  </div>
</template>
<script>
 import {mapState,mapGetters,mapActions,mapMutations} from 'vuex';
//  import {createNamespacedHelpers} from 'vuex';
//  const {mapGetters} = createNamespacedHelpers('user')
export default {
   data(){
     return{
     }
   },
   computed:{
    //   ...mapState('user',{
    //    userName: state => state.userName
    //  }),
    //  ...mapState({
    //     todolist : state => state.todo.todolist ?  state.todo.todolist  : []
    //  }),
     ...mapGetters([
       'age',
       'appversion'
     ]),
     inputValue:{
       get(){
         return   this.$store.state.inputValue;
       },
       set(val){
         this.changeinputValue(val)
       }
     },
    //  ...mapGetters('user',[
    //    'age',
    //   //  'appversion'
    //  ]),
     ...mapState({
       appName: state => state.appName,
       userName: state => state.user.userName,
       todolist: state => state.user.todo ?  state.user.todo.todolist  : ''
     }),
    //  ...mapState([
    //    'appName'
    //  ]),
    // appName(){
    //   return  this.$store.state.appName;
    // },
    // userName(){
    //   return  this.$store.state.user.userName;
    // }
   },
   methods:{
    ...mapActions([
      'updateAppName'
    ]),
    ...mapMutations([
     'CHANGEINPUVALUE'
    ]),
    changeEmail(){
     // this.$store.state.appName='dssss'
      this.updateAppName();
      // this.$store.dispatch('updateAppName','1111')
      // this.$bus.$emit('click','haha')
    },
    addModule(){
      this.$store.registerModule(['user','todo'], {
         state:{
           todolist:'111111'
         }
      })
      console.log(this.$store)
    },
    changeinputValue(val){
       this.CHANGEINPUVALUE(val)
    }
   }

}
</script>
