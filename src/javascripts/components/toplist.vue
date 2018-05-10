<template>
  <div>
    <div id="toplist-container">
      <ul class="list">
        <li v-for="item in list" class="list-item" v-on:click="turnToTopicPage(item.id)">
          <div class="img-block">
            <img :src="item.picUrl" />
          </div>
          <div class="content-block">
            <h3>{{item.topTitle}}</h3>
            <ul class="song-list">
              <li v-for="(s, index) in item.songList" :title="s.songname">
                <span class="number">{{index+1}}</span>
                <span class="name">{{s.songname}}</span>
                <span class="singer">{{s.singername}}</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="view-more">去客户端发现更多好音乐></div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import Tabs from './tabs.vue';
  export default {
    name: "Toplist",
    data: function(){
      return {
        list:[]
      };
    },
    components:{
      Tabs
    },
    created: function(){
      axios.get("/api/top_list").then(function(res){
        return res.data;
      }).then((data)=>{
        this.list = data&&data.data&&data.data.topList;
      }, function(error){
        console.log(error);
      })
    },
    methods: {
      turnToTopicPage: function(id){
        this.$router.push('/topiclist/'+id);
      }
    }
  };
</script>
<style scoped>
  #toplist-container{
    padding: 10px;
    background: #d1d7e1;
  }
  .list-item{
    display: flex;
    background: #fdfdfd;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }
  .list-item + .list-item{
    margin-top: 10px;
  }
  .list-item .img-block{
    height: 100px;
    width: 100px;
    overflow: hidden;
  }
  .img-block img{
    height: 100px;
    width: 100px;
  }
  .content-block{
    padding: 10px;
    flex: 1;
    overflow: hidden;
    box-sizing: border-box;
  }
  .content-block h3{
    font-size: 16px;
    margin-bottom: 5px;
  }
  .content-block li{
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
  }
  .content-block li .number, .content-block li .singer{
    color: #99A1B4;
  }
  .view-more{
    fonr-size: 16px;
    text-align: center;
    color: #4c5475;
    padding: 20px 0 10px;
  }
</style>