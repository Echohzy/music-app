<template>
  <div>
    <Tabs />
    <div class="search-container">
      <div class="search-block">
        <div class="search-wrapper">
          <i class="iconfont icon-search"></i>
          <input type="text" placeholder="搜索歌曲、歌单、专辑" v-on:focus="setSearching(true)"  v-model="keyword" v-on:keydown="inputKeyword"/>
          <i class="iconfont icon-close-border" v-bind:class="{ hidden: !searching||keyword.length===0 }" v-on:click="setKeyword('')"/>
        </div>
        <button class="cancel" v-bind:class="{ hidden: !searching }" v-on:click="setSearching(false)">取消</button>
      </div>
      <div class="search-content">
        <div class="keys" v-bind:class="{ hidden: searching }">
          <h2>热门搜索</h2>
          <div class="keys-block">
            <span class="key" v-for="k in hotKeys" v-on:click="searchFromHistory(k.k)">{{k.k}}</span>
          </div>
        </div>
        <ul class="search-history" v-bind:class="{ hidden: !(searching&&!searchResults.keyword) }">
          <li class="search-history-item" v-for="s in searchHistory" v-on:click="searchFromHistory(s)" >{{s}} <i v-on:click.stop="removeSearchHistory(s)" class="iconfont icon-close" /></li>
          <li class="search-history-clean" v-bind:class="{ hidden: !searching||searchHistory.length===0 }"  v-on:click="cleanAllSearchHistory" >清除搜索记录</li>
        </ul>
        <div class="no-result" v-bind:class="{ hidden: !(searchResults.keyword&&(!searchResults.song||searchResults.song.totalnum===0)) }">
          <p>抱歉，没有找到与”{{this.keyword}}“相关的结果。</p>
        </div>
        <ul class="song-list">
          <li class="song-item" v-for="s in searchResults.song&&searchResults.song.list" v-on:click="turnToSingleSong(s.songmid)">
            <div class="music-logo">
              <i class="iconfont icon-music" />
            </div>
            <div class="content">
              <p class="name" v-html="s.songname"></p>
              <p class="singer">
                <span v-for="p in s.singer" v-html="p.name"></span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import Tabs from './tabs.vue';
  export default {
    name: "Search",
    components:{
      Tabs
    },
    data: function(){
      return {
        hotKeys:[],
        searchHistory:[],
        searchResults:{},
        keyword: "",
        searching: false
      };
    },
    created: function(){
      this.searchHistory = this.getSearchHistory();
      axios.get("/api/hot_key").then(function(res){
        return res.data;
      }).then((data)=>{
        this.hotKeys = data&&data.data&&data.data.hotkey&&data.data.hotkey.slice(0, 12);
      }, function(error){
        console.log(error);
      });
    },
    methods:{
      getSearchResults: function(params){
        axios.get("/api/search",{
          params: params
        }).then(function(res){
          return res.data;
        }).then((data)=>{
          this.searchResults = data&&data.data;
          return data&&data.data;
        }).then((data)=>{
          if(data){
            this.storeSearchHistory(data.keyword);
          }
        }).catch(function(error){
          console.log(error);
        });
      },
      setKeyword: function(keyword){
        this.keyword = keyword;
      },
      searchFromHistory: function(keyword){
        this.searching = true;
        this.setKeyword(keyword);
        this.getSearchResults({key:keyword, p:1, perpage: 10});
      },
      inputKeyword: function(e){
        if(e.key==="Enter"&&this.keyword){
          this.getSearchResults({key: this.keyword, p:1, perpage: 10});
        }
      },
      cleanAllSearchHistory: function(){
        this.searchHistory = [];
        if(localStorage){
          localStorage.removeItem("search");
        }
      },
      storeSearchHistory: function(keyword){
        if(this.searchHistory.indexOf(keyword)===-1){
          this.searchHistory = this.searchHistory.concat(keyword);
          if(localStorage){
            localStorage.setItem("search", this.searchHistory.join(","));
          }
        }
      },
      getSearchHistory: function(){
        if(localStorage){
          var search_history = localStorage.getItem("search");
          if(search_history){
            return search_history.split(",");
          }else{
            return [];
          }
        }
        return [];
      },
      removeSearchHistory: function(keyword){
        if(this.searchHistory.indexOf(keyword)>-1){
          this.searchHistory = this.searchHistory.filter(function(k){
            return k!==keyword;
          });
          localStorage.setItem("search", this.searchHistory.join(","));
        }
      },
      setSearching: function(searching){
        this.searching = searching;
        if(!searching){
          this.searchResults = {};
        }
      },
      turnToSingleSong: function(songmid){
        this.$router.push("/song?song_id="+songmid);
      }
    }
  }
</script>
<style scoped>
  .search-block{
    padding: 10px;
    display: flex;
    color: #818FAF;
    background: #d1d7e1;
  }
  .search-wrapper{
    flex: 1;
    padding: 5px;
    background: #fdfdfd;
    display: flex;
  }
  .search-block i{
    font-size: 20px;
  }
  .search-block .icon-search{
    margin-right: 5px;
  }
  .search-block .icon-close-border{
    margin-left: 5px;
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
  .search-content{
    box-sizing: border-box;
    padding: 10px;
    background: #fdfdfd;
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
  .search-history-item{
    font-size: 14px;
    padding: 10px 0;
  }
  .search-history-item + .search-history-item{
    border-top: 1px solid #d1d7e1;
  }
  .icon-close{
    float: right;
  }
  .search-history-clean{
    padding: 10px 0;
    color: #4c5475;
    text-align: center;
  }
  .no-result{
    text-align: center;
    padding: 40% 0;
    color: #4c5475;
  }
  .song-item{
    display: flex;
  }
  .music-logo{
    width: 40px;
  }
  .icon-music{
    font-size: 32px;
  }
  .song-item{
    padding: 10px 0;
  }
  .song-item + .song-item{
    border-top: 1px solid #d1d7e1; 
  }
  .song-item .content{
    position: relative;
    overflow: hidden;
  }
  .song-item .name{
    font-size: 14px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  .singer {
    color: #818faf;
  }
  .hidden{
    display: none;
  }
</style>