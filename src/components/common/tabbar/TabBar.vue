<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name:'TabBar'
}
</script>
<style scoped>
  #tab-bar{
    display: flex;
    height: 49px;
    /* line-height: 49px; */
    background-color: #f6f6f6;
    text-align: center;
    position: fixed;right: 0;left: 0;bottom: 0;
    border-top: 1px solid #eee;
    box-shadow: 0,-1px,1px,rgba(150,150,150,.08);
  }
</style>