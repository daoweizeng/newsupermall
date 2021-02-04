<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="conItem" @click="itemClick(index)">
      <span :class="{active:currentIndex === index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index,
      this.$emit('tabClick',index)
    }
  }
}
</script>

<style scoped>
  .tab-control{
    background-color: white;
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
  }
  .conItem{
    flex: 1;
  }
  .active{
    color: var(--color-tint);
    padding-bottom: 5px;
    border-bottom: 2px solid var(--color-tint);
  }
</style>