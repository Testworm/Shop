<template>
  <div id="app">
    <!--<router-view></router-view>-->
    <myheader></myheader>
  </div>
</template>

<script>
  import myheader from '@/components/myheader.vue';
  import extend from './views/extend.vue';
  import shop from './views/shop.vue';
  import product from './views/product.vue';
  import sale from './views/sale.vue';

export default {
  components: {
    myheader,
    extend,
    shop,
    sale,
    product
  },
  name: 'App'
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*!*color:white ;*!*/
  /*margin-top: 0px;*/
  /*height: 50px;*/
  /*background-color: rgb(70,142,51);*/
  /*!*width: 100%;*!*/
  /*position: relative;*/
}
</style>
