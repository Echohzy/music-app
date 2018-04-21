<template>
  <div id="slider-container">
    <ul class="slider-content">
      <li v-for="s in slider">
        <a :href="s.linkUrl">
          <img :src="s.picUrl"/>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: "Slider",
    props: {
      slider: {
        type: Array,
        default:[],
        required: true
      }
    }
  };
</script>
<style scoped>
  #slider-container{
    display: flex;
  }
</style>