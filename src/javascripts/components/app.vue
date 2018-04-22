<template>
  <div id="app">
    <Header />
    <Tabs />
    <router-view class="view"></router-view>
  </div>
</template>
<script>
  import Header from './header.vue';
  import Tabs from './tabs.vue';
  export default {
    name: "App",
    components: {
      Header,
      Tabs
    }
  }
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
</style>