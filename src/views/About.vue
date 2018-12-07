<template>
  <div class="about">
    <h1>This is an about page
      {{food}}
    </h1>
    <button @click='gobeforePage1'>上一页</button>
    <button @click='gobeforePage2'>上一页</button>
    <button @click='goorder'>传参</button>
  </div>
</template>
<script>
export default {
  props:{
     food:{
      type:String,
      default:'banaer1'
     }
  },
  data(){
    return{

    }
  },
  methods:{
   gobeforePage1(){
     //this.$router.go(-1);
     //this.$router.back()
     //this.$router.push({'name':"list"})
     this.$router.push('/list');
   },
   gobeforePage2(){
     this.$router.replace('/news');
   },
   goorder(){
     const id='dd';
     this.$router.push({
      //path:`/order/${id}`,
      name:'order',
      params:{
         id:'123'
      }
      // query:{
      //  'id':'123'
      // }
     })
   }
  }
}
</script>

