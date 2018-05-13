<template>
    <div class="product">
      <table class="table table-hover">
        <caption>热销商品TOP50</caption>
        <thead>
        <tr>
          <th>商品名称</th>
          <th>下单数量</th>
          <th>下单金额/(元)</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="prod in products">
          <td>{{prod.product}}</td>
          <td>{{prod.total_amount}}</td>
          <td>{{prod.total_pay}}</td>
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
          total_amount: ''
        }
      },
      methods: {
        qryProductTop() {
          server.qryProductTop().then((res) => {
            this.products = res.data.list;
            // console.log(JSON.parse(res.data.list[0].content).content);
            // this.content1 = JSON.parse(res.data.list[0].content).content;
            // console.log(this.pageCount)
          })
        },
      },
    mounted: function () {
      this.qryProductTop();
    },
        name: "product"
    }
</script>

<style scoped>

</style>
