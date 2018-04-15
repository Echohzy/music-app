<template>
  <div>
    <h1>Home</h1>
    <p>{{message}}</p>
  </div>
</template>
<script>
export default {
  name: "Home",
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
