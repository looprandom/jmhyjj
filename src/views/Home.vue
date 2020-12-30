<template>
  <Header/>
  <router-view></router-view>
  <Footer/>
</template>

<script>
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'Home',
  components:{Header,Footer},
} 
</script>

  

