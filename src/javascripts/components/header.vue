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
    background: rgba(41,42, 45, 0.8);
    display: flex;
    align-items: center;
  }
  h1{
    flex: 1;
    font-size: 20px;
    color: #e2e2e3;
  }
</style>