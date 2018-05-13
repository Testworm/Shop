<template>
  <div id="head">
    <div class="nav" style="color: white">
      <ul class="nav nav-tabs">
      <li><router-link to="/">店铺统计</router-link></li>
      <li><router-link to="/sale/">销量分析</router-link></li>
      <li><router-link to="/product/">商品分析</router-link></li>
      <li><router-link to="/extend/">敬请期待</router-link></li>
      </ul>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>
.nav{
  height: 60px;
  margin: 0 auto;
  background-color: darkolivegreen;
  color: white;
  font-size: large;
  font-weight: bold;
}
.content{
  /*margin-top: 60px;*/
  height: 600px;
  background-color: aquamarine;
  padding-top: 30px;
}
</style>
