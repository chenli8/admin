<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/ab">About</router-link>
      <router-link :to="{name:'news'}">news</router-link>
    </div>
    <transition-group :name='animationName'>
      <router-view key='default' />
      <router-view key='email' name='email' />
      <!-- <router-view key='iphone' /> -->
    </transition-group>
  </div>
</template>
<script>
export default {
  data(){
    return{
     animationName:''
    }
  },
  watch:{
    '$route' (to) {
       to.query && to.query.animationName && (this.animationName=to.query.animationName)
    }
  }
}
</script>

<style lang="scss">
.animation-enter{
  opacity: 0;
}
.animation-enter-active{
  transition: opacity 1s linear;
}
.animation-enter-to{
 opacity: 1;
}
.animation-leave{
  opacity: 1;
}
.animation-leave-active{
  transition: opacity 1s linear;
}
.animation-leave-to{
 opacity: 0;
}
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
