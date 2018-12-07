<template>
  <div class="home">
    {{food}}
   <!-- <HelloWorld v-model="textval"  /> -->
   <!-- <HelloWorld :textval="textval"  @inputchange='inputchange'/> -->
   <HelloWorld :textval.sync="textval"/>
   {{textval}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  props:{
    food:{
      type:String,
      default:"DD"
    }
  },
  name: 'home',
  data(){
    return {
      textval:'textval'
    }
  },
  components: {
    HelloWorld
  },
  methods:{
   inputchange(val){
     this.textval = val;
   }
  },
  beforeRouteEnter(to, from, next){
    // console.log(from.name)
    //console.log(to.name)
    next(vm =>{
     // console.log(vm)
    });
  },
  beforeRouteLeave(to,from,next) {
   const leave = confirm('你确定要离开吗');
   if(leave) next();
   else next(false)
  }
}
</script>
