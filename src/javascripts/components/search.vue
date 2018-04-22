<template>
  <div class="search-container">
    
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
</style>