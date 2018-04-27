<template>
  <div class="search-container">
    <div class="search-block">
      <input type="text" placeholder="搜索歌曲、歌单、专辑"/>
      <i class="iconfont icon-search"></i>
    </div>
    <div class="search-content">
      <h2>热门搜索</h2>
      <div class="keys-block">
        <span class="key" v-for="k in hotKeys">{{k.k}}</span>
      </div>
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
        hotKeys:[],
        searchResults:{},
        keyword: ""
      };
    },
    created: function(){
      axios.get("/api/hot_key").then(function(res){
        return res.data;
      }).then((data)=>{
        this.hotKeys = data&&data.data&&data.data.hotkey&&data.data.hotkey.slice(0, 12);
      }, function(error){
        console.log(error);
      })
    },
    methods:{
      getSearchResults: function(params){
        axios.get("/api/search",{
          params: params
        }).then(function(res){
          return res.data;
        }).then((data)=>{
          this.searchResults = data;
        }, function(error){
          console.log(error);
        })
      }
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
    border: none;
  }
  .search-content{
    box-sizing: border-box;
    padding: 10px;
    background: #fdfdfd;
    flex: 1;
  }
  .search-content h2{
    font-size: 16px;
  }
  .search-content .keys-block{
    margin: 10px 0;
  }
  .keys-block .key{
  font-size: 14px;
    display: inline-block;
    padding: 4px 10px;
    border: 1px solid;
    border-radius: 20px;
    margin: 0 8px 10px 0;
    color: rgba(0,0,0,0.7);
  }
</style>