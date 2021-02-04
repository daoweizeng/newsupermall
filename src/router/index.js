import { createRouter, createWebHistory } from 'vue-router'

const Home = ()=>import('views/home/Home')
const CateGory = ()=>import('views/category/CateGory')
const Cart = ()=>import('views/cart/Cart')
const ProFile = ()=>import('views/profile/ProFile')


const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:CateGory
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:ProFile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
