<template>
  <div class="home-container">
    <Tabs />
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
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
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>