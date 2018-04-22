<template>
  <div class="header">
    <h1>Music App</h1>
    <button>Download</button>
  </div>
</template>
<script>
  export default{
    name: "Header"
  }
</script>
<style scoped>
  .header{
    height: 44px;
    background: #4c5475;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  h1{
    flex: 1;
    font-size: 18px;
    color: #FDFDFD;
    font-weight: lighter;
  }
  button{
    color: #fdfdfd;
    background: #818FAF;
    border: none;
    padding: 6px 10px;
    border-radius: 15px;
  }
</style>