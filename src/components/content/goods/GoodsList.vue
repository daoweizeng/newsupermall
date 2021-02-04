<template>
  <div class="goods-item">
    <goods-list-item v-for="item in goodsList" :item="item" class="item"/>
  </div>
</template>

<script>

import GoodsListItem from './GoodsListItem'

export default {
  name:'GoodList',
  props:{
    goodsList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style>
  .goods-item{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 3px;
  }
</style>