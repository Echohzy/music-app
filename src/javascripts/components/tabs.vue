<template>
  <div class="tabs-container">
    <router-link class="tab-button" to="/home">首页</router-link>
    <router-link class="tab-button" to="/toplist">榜单</router-link>
    <router-link class="tab-button" to="/search">搜索</router-link>
  </div>
</template>
<script>
  export default {
    name: "Tabs",
  }
</script>
<style scoped>
  .tabs-container{
    display: flex;
    height: 40px;
    line-height: 40px;
    background: #fdfdfd;
    
  }
  .tab-button{
    flex: 1;
    font-size: 16px;
    text-align: center;
    border-box: border-content;
    color:#4c5475;
  }
  .tab-button.router-link-active{
    color: #818FAF;
    border-bottom: 2px solid #818FAF;
  }
</style>