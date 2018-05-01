<template>
  <div class="search-container">
    <div class="search-block">
      <div class="search-wrapper">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜索歌曲、歌单、专辑" v-on:focus="()=>setSearching(true)"  v-model="keyword" v-on:keydown="inputKeyword"/>
      </div>
      <button class="cancel" v-bind:class="{ hidden: !searching }" v-on:click="()=>setSearching(false)">取消</button>
    </div>
    <div class="search-content" v-bind:class="{ hidden: !searching }">
    </div>
    <div class="search-content" v-bind:class="{ hidden: searching }">
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
        keyword: "",
        searching: false
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
          this.searchResults = data&&data.data;
        }, function(error){
          console.log(error);
        })
      },
      inputKeyword: function(e){
        if(e.key==="Enter"){
          this.getSearchResults({key: this.keyword, p:1, perpage: 10});
        }
      },
      setSearching: function(searching){
        this.searching = searching;
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
    
    display: flex;
    color: #818FAF;
  }
  .search-wrapper{
    flex: 1;
    padding: 5px;
    background: #fdfdfd;
    display: flex;
  }
  .search-block i{
    font-size: 20px;
    margin-right: 5px;
  }
  .search-block input{
    flex: 1;
    line-height: 20px;
    outline: none;
    border: none;
  }
  .search-block .cancel{
    border: none;
    background: none;
    outline: none;
    margin-left: 10px;
  }
  .search-block .cancel.hidden{
    display: none;
  }
  .search-content{
    box-sizing: border-box;
    padding: 10px;
    background: #fdfdfd;
    flex: 1;
  }
  .search-content.hidden{
    display: none;
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