<template>
    <div class="swiper-container" >
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in banners">
          <img :src="item.image" alt="">
        </div>
        <!-- <div class="swiper-slide"><img src="https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg" alt=""></div> -->
        <!-- <div class="swiper-slide"><img src="https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg" alt=""></div> -->
        <!-- <div class="swiper-slide"><img src="https://s10.mogucdn.com/mlcdn/c45406/180919_3f62ijgkj656k2lj03dh0di4iflea_750x390.jpg" alt=""></div> -->
        <!-- <div class="swiper-slide"><img src="https://s10.mogucdn.com/mlcdn/c45406/180917_18l981g6clk33fbl3833ja357aaa0_750x390.jpg" alt=""></div> -->
      </div>
      <!-- Add Pagination -->
      <!-- <div class="swiper-scrollbar"></div> -->
      <!-- 如果需要分页器 -->
      <!-- <div class="swiper-pagination"></div> -->
      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div>-->
      <!-- <div class="swiper-button-next"></div> -->
      <div class="swiper-pagination"></div>
    </div>
  
</template>

<script>

import Swiper from 'swiper/swiper-bundle.min.js'
import 'swiper/swiper-bundle.min.css'

export default {
  name:'HomeSwiper',
  data(){
    return{
      swSwiper:null
    }
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  mounted(){
      this.swSwiper = new Swiper('.swiper-container', {
      loop : true,
      observer: true, //修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      // effect : 'fade',
      // fadeEffect: {
      //   crossFade: true,
      // }
      // effect : 'cube',
      // cubeEffect: {
      // slideShadows: true,
      // shadow: false,
      // shadowOffset: 100,
      // shadowScale: 0.6
      // },
      effect : 'coverflow',
      slidesPerView: 1,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 30,
        stretch: 10,
        depth: 60,
        modifier: 2,
        slideShadows : true
      },
    })
  },
  methods:{
    imgLoad(){
      this.swSwiper()
    }
  }
}
</script>

<style scoped>
    .swiper-container {
      width: 100%;
      height: 100%;
      --swiper-theme-color: #ff6600;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    } 
    .swiper-slide img{
      width:100%;
      height: 100%;
    }
</style>