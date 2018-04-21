<template>
  <div>
    <Header />
    <Slider :slider="slider"/>
  </div>
</template>
<script>
import Header from './header.vue';
import Slider from './slider.vue';
import axios from 'axios';
export default {
  name: "Home",
  components:{
    Header,
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
      this.slider = data.slider;
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
