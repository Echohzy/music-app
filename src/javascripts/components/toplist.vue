<template>
  <div id="toplist-container">
    <ul class="list">
      <li v-for="item in list">
        <div class="img-block">
          <img :src="item.picUrl" />
        </div>
        <div class="content-block">
          <h3>{{item.topTitle}}</h3>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    name: "Toplist",
    data: function(){
      return {
        list:[]
      };
    },
    created: function(){
      axios.get("/api/top_list").then(function(res){
        return res.data;
      }).then((data)=>{
        this.list = data&&data.data&&data.data.topList;
      }, function(error){
        console.log(error);
      })
    }
  };
</script>
<style scoped>
  
</style>