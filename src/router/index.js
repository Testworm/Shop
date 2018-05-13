import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import shop from '@/views/shop'
import sale from '@/views/sale'
import product from '@/views/product'
import extend from '@/views/extend'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shop',
      component: shop
    }, {
      path: '/sale',
      name: 'sale',
      component: sale
    }, {
      path: '/product',
      name: 'product',
      component: product
    }, {
      path: '/extend',
      name: 'extend',
      component: extend
    }
  ]
})
