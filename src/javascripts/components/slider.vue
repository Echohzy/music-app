<template>
  <div id="slider-container">
    <ul class="slider-content" :style="{marginLeft: marginLeft}">
      <li v-for="s in slider" class="slider-item">
        <a :href="s.link">
          <img :src="s.pic"/>
        </a>
      </li>
    </ul>
    <div class="page-content">
      <span v-for="n in totalPages" v-on:click="changePage(n-1)" class="page-button"></span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Slider",
    data: function(){
      return {
        currentPage: 0
      };
    },
    computed:{
      totalPages: function(){
        return this.slider.length;
      },
      marginLeft: function(){
        return -100*this.currentPage+"vw";
      }
    },
    props: {
      slider: {
        type: Array,
        default:[],
        required: true
      }
    },
    methods:{
      changePage: function(page){ 
        this.currentPage = page;
      }  
    }
  };
</script>
<style scoped>
  #slider-container{
    position: relative;
  }
  .slider-content{
    display: flex;
    transition: all 0.2s ease;
  }
  .slider-item{
    width: 100vw;
  }
  .slider-item img{
    width: 100vw;
  }
  .page-content{
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: 20px;
  }
  .page-button{
    display: inline-block;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background: rgba(255, 255,255, 0.8); 
  }
  .page-button + .page-button{
    margin-left: 6px;
  }
</style>