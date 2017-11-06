import Vue from 'vue'
import Router from 'vue-router'
import GoodList from '@/view/GoodList'
import Title from '@/view/Title'
import Image from '@/view/Image'
import Cart from '@/view/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      component: GoodList,
      children:[
        {
          path:'title',
          name:'title',
          component:Title
        },
        {
          path:'image',
          name:'image',
          component:Image
        }
      ]
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    }
  ]
})
