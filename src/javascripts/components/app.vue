<template>
  <div id="app">
    <Header />
    <router-view class="view"></router-view>
  </div>
</template>
<script>
  import Header from './header.vue';
  export default {
    name: "App",
    components: {
      Header
    }
  }
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  html, body{
    height: 100%;
  }
  #app{
    height: 100%;
  }
</style>