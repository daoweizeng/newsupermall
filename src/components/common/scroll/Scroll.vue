<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {
  name:'Scroll',
  data(){
    return{
      scroll:null,
    }
  },
  props:{
    probeType:{
      type:Number,
      default:0
    }
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wrapper, {
      click:true,
      observeDOM: true,
      probeType:this.probeType
    })
    this.scroll.on('scroll',(position)=>{
      // console.log(position);
      this.$emit('scrollPosiion',position)
    })
  },
  methods:{
    scrollTo(x,y,time=500){
      this.scroll.scrollTo(x,y,time)
    }
  }
}
</script>

<style>

</style>