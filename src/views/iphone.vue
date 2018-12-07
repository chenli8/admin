<template>
  <div>
    {{msg}}
  </div>
</template>
<script>
export default {
data(){
  return{
    msg:"msg"
  }
},
mounted(){
  this.$bus.$on('click', res => {
     this.msg = res;
  })
}
}
</script>
