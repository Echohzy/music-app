<template>
  <div class="topiclist-container">
    <div class="topic-detail-wrapper">
      <img :src="detail.topinfo&&detail.topinfo.pic" class="background-img" />
      <div class="topic-detail" >
        <div class="topic-cover">
          <img :src="detail.topinfo&&detail.topinfo.pic"/>
        </div>
        <div class="topic-info">
          <p class="topic-name" :title="detail.topinfo&&detail.topinfo.ListName">{{detail.topinfo&&detail.topinfo.ListName}}</p>
          <p class="date">创建时间：{{detail.date}}</p>
          <p class="date">更新时间：{{detail.update_time}}</p>
        </div>
      </div>
    </div>
    <div class="topic-list">
      <p class="total-num">共{{detail.cur_song_num}}首</p>
      <ul class="song-list">
        <li v-for=" s in detail.songlist">
          <p class="song-name" :title="s.data&&s.data.songname">{{s.data&&s.data.songname}}</p>
          <p class="song-singer">{{getSinerNames(s.data.singer)}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import fetchJsonp from "../utils/fetch_jsonp.js";
  const topic_url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&_=1492910996732"
  export default {
    name: "Topiclist",
    data: function(){
      return {
        detail: {}
      };
    },
    created: function(){
      fetchJsonp(`${topic_url}&topid=${this.$route.params.id}`, {
        callback: "jsonpCallback"
      }).then(function(response){
        return response.json();
      }).then((data)=>{
        this.detail = data;
      }).catch(function(error){
        console.log(error);
      })
    },
    methods: {
      getSinerNames: function(singers){
        let names = [];
        singers.forEach((s)=>{
          names.push(s.name);
        });
        return names.join("/");
      }
    }
  };
</script>
<style scoped>
  .topic-detail{
    display: flex;
    padding: 50px 15px;
    height: 125px;
    align-items: center;
    background: rgba(94, 116,160, 0.5);
  }
  .topic-cover{
    height: 125px;
    width: 125px;
    overflow: hidden;
    margin-right: 15px;
  }
  .topic-cover img{
    height: 125px;
    width: 125px;
  }
  .topic-info{
    font-size: 12px;
    color: #fdfdfd;
    overflow: hidden;
    flex: 1;
  }
  .topic-info .topic-name{
    font-size: 16px;
    margin-bottom: 5px;
    text-overflow: ellipsis;
    white-space:nowrap;
    overflow: hidden;
  }
  .topic-detail-wrapper{
    position: relative;
  }
  .background-img{
    position: absolute;
    z-index: -1;
    height: 215px;
    width: 100%;
    filter: blur(10px);
  }
  .song-list{
    counter-reset: songCounter 0;
    padding: 0 10px;
  }
  .song-list li{
    border-top: 1px solid #99a1b4;
    position: relative;
    padding: 10px 10px 10px 35px;
    color: #4c5475;
    overflow: hidden;
  }
  .song-name{
    font-size: 16px;
    margin-bottom: 5px;
  }
  .song-list li:before{
    position: absolute;
    font-size: 16px;
    left: 8px;
    top: 19px;
    content: counter(songCounter);
    counter-increment: songCounter;
  }
  .topic-list{
    background: #d1d7e1;
  }
  .total-num{
    font-size: 14px;
    color: #fdfdfd;
    padding: 10px;
    margin-bottom: 5px;
  }
  .song-name, .song-singer{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>