<template>
  <div>
    <Header />
    <h1>Home</h1>
    <p>{{message}}</p>
  </div>
</template>
<script>
import Header from './header.vue';
export default {
  name: "Home",
  components:{
    Header
  },
  data:function(){
    return {
      message: "hahahaha"
    }
  }
}
</script>
<style scoped>
  h1{
    font-size: 20px;
  }
</style>
