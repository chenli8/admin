<template>
  <div>
    <p>{{appName}}</p>
    <button @click='handlefun'>修改name值</button>
    <p>{{addName}}</p>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    data() {
      return {

      }
    },
    computed: {
      ...mapState([
        'appName',
        'addName'
      ]),
    },
    methods: {
      ...mapMutations([
        'SET_NAME',
        'SET_ADDNAME'
      ]),
     handlefun(){
      //  this.$store.commit('SET_NAME',{
      //    appname:'newname'
      //  })
      // this.$store.commit({
      //    type:'SET_NAME',
      //    appname:'newname'
      //  })
       this.SET_NAME('newname')
       //this.$store.commit('SET_ADDNAME','admin')
     }
    }
  }
</script>
