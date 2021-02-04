<template>
  <div id="home">
    <nav-bar class="homeNavBar">
      <template #center><div>购物车</div></template>
    </nav-bar>

    <scroll class="content" ref="scroll" :probeType="3" @scroll-posiion="scrollPosiion">
      <home-swiper :banners="banners"/>
      <recommend-view :recommens="recommens"/>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']" class="tabControl" @tabClick="tabClick"/>
      <goods-list :goodsList="goodsType"/>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/common/tabcontrol/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backtop/BackTop'
import Scroll from 'components/common/scroll/Scroll'

import HomeSwiper from 'views/home/childcomps/HomeSwiper'
import RecommendView from './childcomps/RecommendView'
import FeatureView from './childcomps/FeatureView'

// import $ from 'jquery'

// 数据请求
import {getHomeMultidata,getHomeGoodsData} from 'network/home'

export default {
  name:'Home',
  components:{
    NavBar,
    TabControl,
    GoodsList,
    BackTop,
    Scroll,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data(){
    return {
      banners:null,
      recommens:null,
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      isShowBackTop:false
    }
  },
  created(){
    this.getHomeMultidata(),
    this.getHomeGoodsData('pop')
    this.getHomeGoodsData('new')
    this.getHomeGoodsData('sell')
  },
  // mounted:{
  //   backtop(){
  //     $(function(){  
  //       $(window).scroll(function(){  
  //         var scroll_top=$(window).scrollTop();  
  //         console.log(scroll_top)  
  //         if(scroll_top>=400){  
  //             $(".back-top").fadeIn();  
  //         }else{  
  //             $(".back-top").fadeOut();  
  //         }  
  //       })  
  //     })
  //   },
  // },
  computed:{
    goodsType(){
      return this.goods[this.currentType].list
    }
  },
  methods:{
    //事件监听相关的方法
    tabClick(index){
      // console.log(index);
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    scrollPosiion(position){
      // console.log(position);
      this.isShowBackTop = (-position.y)>1000
    },
    // backtop(){
    //     $(window).scroll(function() {
    //     // 获取滚动条的垂直滚动值
    //     var scrolltop = $(window).scrollTop();

    //     // 垂直滚动值大于500时，显示回到顶部，否则隐藏
    //     if (scrolltop >= 500) {
    //       $(".backtop").show();
    //     } else {
    //       $(".backtop").hide();
    //     }
    //       });

    //   // 点击回到顶部,将html或body的scrollTop属性值设为0
    //     $(".backtop").click(function() {
    //     $("html,body").stop().animate({
    //       "scrollTop": "0px"
    //     });
    //   });
    // },

    //数据请求的方法
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        // console.log(res);
        this.banners = res.data.banner.list
        this.recommens = res.data.recommend.list
      })
    },
    getHomeGoodsData(type){
      const page = this.goods[type].page + 1
      getHomeGoodsData(type,page).then(res=>{
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
      })
    }
  }
}
</script>

<style scoped>
  #home{
      padding-top: 44px;
      position: relative;
    }
  .homeNavBar{
    background: var(--color-tint);
    color: white;
    text-align: center;
    position: fixed;right: 0;left: 0;top: 0;
    z-index: 9;
  }
  .tabControl{
    position: sticky;top: 44px;
    z-index: 9;
  }
  /* .back-top{
    width: 20px;
    height: 20px;
    position: fixed;right: 0;bottom: 0px;
    z-index: 9;
  } */
  .content{
    position: absolute;top: 44px;bottom: 49px;left: 0;right: 0;
  }
</style>