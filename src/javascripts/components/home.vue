<template>
  <div>
    <Slider :slider="slider"/>
  </div>
</template>
<script>
import Slider from './slider.vue';
import axios from 'axios';
export default {
  name: "Home",
  components:{
    Slider
  },
  data:function(){
    return {
      radioList:[],
      slider:[]
    }
  },
  created: function(){
    axios.get("/api/index_slider").then(function(res){
      return res.data;
    }).then((data)=>{
      this.radioList = data.radioList,
      this.slider = data.slider.map((s)=>{
        return {
          link: s.linkUrl,
          pic: s.picUrl
        };
      });
    },function(error){
      alert(error);
    })
  }
}
</script>
<style scoped>
  h1{
    font-size: 20px;
  }
</style>
