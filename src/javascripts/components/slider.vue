<template>
  <div id="slider-container">
    <ul class="slider-content" :style="{marginLeft: marginLeft}" v-on:touchstart.prevent="onTouchStart" v-on:touchend="onTouchEnd">
      <li v-for="s in slider" class="slider-item">
        <a :href="s.link">
          <img :src="s.pic"/>
        </a>
      </li>
    </ul>
    <div class="page-content">
      <span v-for="n in totalPages" v-on:click="changePage(n-1)" class="page-button" :class="{active: n===currentPage+1}"></span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Slider",
    data: function(){
      return {
        currentPage: 0,
        touchPosition: {}
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
      },
      startScrollBanner: function(){
        if(this.timer){
          return;
        }
        this.timer = window.setInterval(()=>{
          this.changePage((this.currentPage+1)%this.totalPages);
        }, 5000)
      },
      stopScrollBanner: function(){
        if(!this.timer){
          return;
        }
        clearTimeout(this.timer);
        this.timer = null;
      },
      onTouchStart: function(e){
        this.stopScrollBanner();
        var touch = e.touches[0];
        this.touchPosition = {
          x: touch.pageX,
          y: touch.pageY
        };
      },
      onTouchEnd: function(e){
        var touch = e.changedTouches[0], dir = 0;
        if(touch.pageX-this.touchPosition.x>20){
          dir = -1;
        } else if(this.touchPosition.x-touch.pageX>20) {
          dir = 1;
        }
        if(dir===0){
          return;
        }
        this.currentPage = (this.currentPage + dir + this.totalPages)%this.totalPages;
        this.touchPosition = {};
        this.startScrollBanner();
      }
    },
    created: function(){
      this.startScrollBanner();
    }
  };
</script>
<style scoped>
  #slider-container{
    position: relative;
    overflow: hidden;
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
    height: 8px;
    width: 8px;
    border-radius: 6px;
    border: 2px solid rgba(255, 255,255, 0.8);
    background: rgba(255, 255,255, 0.8); 
  }
  .page-button.active{
    background: #4c5475;
  }
  .page-button + .page-button{
    margin-left: 6px;
  }
</style>