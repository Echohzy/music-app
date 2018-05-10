<template>
  <div class="home-container">
    <Tabs />
    <router-view class="view"></router-view>
  </div>
</template>
<script>
  import Tabs from './tabs.vue';
  export default {
    name: "HomeContainer",
    components:{
      Tabs
    }
  }
</script>
<style scoped>
</style>