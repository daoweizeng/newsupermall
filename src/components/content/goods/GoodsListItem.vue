<template>
  <div class="goods-list-item">
    <a :href="item.link">
      <img :src="item.show.img" alt="">
      <div class="goods-info">
        <p>{{item.title}}</p>
        <span class="price">{{item.price}}</span>
        <span class="cfav">{{item.cfav}}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name:'GoodListItem',
  props:{
    item:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>
  .goods-list-item{
    width: 48%;
    padding-bottom: 25px;
  }
  .goods-list-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info{
    text-align: center;
    font-size: 14px;
  }
  .goods-info p{
    margin:4px 3px 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .cfav{
    position: relative;
  }
  .cfav::before{
    content: '';
    width: 14px;
    height: 14px;
    position: absolute;left: -14px;top: -1px;
    background: url(~assets/img/common/collect.svg) 0 0/14px 14px ;
  }
</style>