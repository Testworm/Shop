<template>
    <div class="sale">
      <table class="table table-hover">
        <caption>销售额最高店铺TOP50</caption>
        <thead>
        <tr>
          <th>店铺名称</th>
          <th>订单金额/(元)</th>
          <th>退单金额</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="shop in shops">
          <td>{{shop.shop}}</td>
          <td>{{shop.total_pay}}</td>
          <td>null</td>
        </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
  import server from '../services/service';
  export default {
      data() {
        return {
          error_no:'',
          error_msg:'',
          error_value:'',
          product:'',
          shop:'',
          start_time:'',
          end_time:'',
          total_pay:'',
          products:'',
          shops:''
        }
      },
      methods: {
        qryTotalMoney() {
          server.qryTotalMoney().then((res) => {
            this.shops = res.data.list;
            console.log(res.data.list);
          })
        }
      },
    mounted: function () {
      this.qryTotalMoney();
    },
        name: "sale"
    }
</script>

<style scoped>

</style>
