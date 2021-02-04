<template>
  <div class="tab-bar-item" @click="routerClick">
    <div class="item-ico" v-if="!isActive"><slot name="item-ico"></slot></div>
    <div class="item-ico-active" v-else><slot name="item-ico-active"></slot></div>
    <div class="item-text" :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    link:{
      type:String
    },
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.link) !== -1
    },
    activeStyle(){
      return this.isActive ?{color:this.activeColor} :{}
    }
  },
  methods:{
    routerClick(){
      // console.log('hhhhh');
      // console.log(index);
      this.$router.replace(this.link)
    }
  }
}
</script>

<style>
  .tab-bar-item{
    flex: 1;
  }
  .item-ico,.item-ico-active{
    display: inline-block;
  }
  .item-ico img,.item-ico-active img{
    width: 24px;
    height: 24px;
    vertical-align: bottom;
    margin-top: 3px;
  }
  .item-text{
    margin-top: 3px;
  }
</style>>