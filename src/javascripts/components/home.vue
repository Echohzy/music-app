<template>
  <div>
    <Slider :slider="slider"/>
    <div class="radio-container">
      <h3>电台</h3>
      <div class="radio-list">
        <div class="radio-block">
          <img :src="radioList[0]&&radioList[0].picUrl" />
          <div class="title">
            <p>{{radioList[0]&&radioList[0].Ftitle}}</p>
          </div>
        </div>
        <div class="radio-block">
          <img :src="radioList[1]&&radioList[1].picUrl"/>
          <div class="title">
            <p>{{radioList[1]&&radioList[1].Ftitle}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Slider from './slider.vue';
import axios from 'axios';
import Tabs from './tabs.vue';
export default {
  name: "Home",
  components:{
    Slider,
    Tabs
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
  .radio-container{
    margin: 10px;
  }
  .radio-container h3{
    font-size: 16px;
    margin-bottom: 10px;
  }
  .radio-list{
    display: flex;
  }
  .radio-block+.radio-block{
    margin-left: 10px;
  }
  .radio-block{
    flex: 1;
  }
  .radio-block img{
    width: 100%;
  }
  .radio-block .title{
    height: 30px;
    padding:10px;
    background: #fff;
    font-size: 14px;
  }
</style>
