<template>
  <div class="recView">
    <div v-for="item in recommens" class="recViewItem">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecommendView',
  props:{
    recommens:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recView{
    display: flex;
    padding: 10px 0 15px;
    border-bottom: 8px solid #ccc;
  }
  .recViewItem{
    flex: 1;
    text-align: center;
  }
  .recViewItem img{
    width: 80%;
    vertical-align: bottom;
  }
  .title{
    margin-top: 5px;
  }
</style>