<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <Header v-if="!$route.meta.is_login"></Header>
  <router-view/>
  <Footer v-if="!$route.meta.is_login"></Footer>
</template>
<script>
import Header from './views/Header'
import Footer from './views/Footer'
export default {
  data(){
    return{
      
    }
  },
  components:{Header,Footer}
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
