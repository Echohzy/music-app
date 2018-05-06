<template>
  <div class="player-block">
    <div class="control-pane">
      <div class="player-button">
        <i class="iconfont icon" v-bind:class="{'icon-pause-o': play, 'icon-17': !play }" v-on:click="setMusicPlay(!play)"/>
      </div>
      <div class="music-detail">
        <p class="song-name">{{music.songname}}</p>
        <p class="singer-name">{{generateSingerName(music.singers)}}</p>
      </div>
    </div>
    <audio class="palyer" :src="music&&music.url" autoplay ref="player" v-on:ended="setMusicPlay(false)" v-on:loadedmetadata="setMusicPlay(true)"/>
  </div>
</template>
<script>
  export default {
    name: "MusicPlayer",
    props: {
      music: Object
    },
    data: function(){
      return {
        play: false
      };
    },
    beforeUpdate: function(){
      
    },
    methods: {
      generateSingerName: function(singers=[]){
        let names = [];
        singers.forEach(function(s){
          names.push(s.name);
        });
        return names.join("/");
      },
      setMusicPlay: function(play){
        this.play = play;
        play?this.$refs.player.play() : this.$refs.player.pause();
      }
    }
  }
</script>
<style scoped>
  .control-pane{
    display: flex;
    padding: 10px;
    align-items: center;
  }
  .song-name{
    font-size: 16px;
    margin-bottom: 10px;
  }
  .music-detail{
    margin-left: 10px;
    overflow: hidden;
  }
  .music-detail p{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  i.iconfont{
    font-size: 60px;
  }
  aduio{
    display: none;
  }
</style>