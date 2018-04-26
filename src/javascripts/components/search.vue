<template>
  <div class="search-container">
    <div class="search-block">
      <input type="text" placeholder="搜索歌曲、歌单、专辑"/>
      <i class="iconfont icon-search"></i>
    </div>
    <div class="search-content">
      <h3>热门搜索</h3>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import VueRouter from 'vue-router';
  export default {
    name: "Search",
    data: function(){
      return {
        hotKeys:[]
      };
    },
    created: function(){
      axios.get("/api/hot_key").then(function(res){
        return res.data;
      }).then((data)=>{
        this.hotKeys = data&&data.data&&data.data.hotkey;
      }, function(error){
        console.log(error);
      })
    }
  }
</script>
<style scoped>
  .search-container{
    height: calc( 100% - 84px );
    display: flex;
    flex-direction: column;
  }
  .search-block{
    margin: 10px;
    background: #fdfdfd;
    display: flex;
    padding: 5px;
    color: #818FAF;
  }
  .search-block i{
    font-size: 20px;
    margin-left: 5px;
  }
  .search-block input{
    flex: 1;
    line-height: 20px;
    outline: none;
  }
  .search-content{
    box-sizing: border-box;
    padding: 10px;
    background: #fdfdfd;
    flex: 1;
  }
</style>