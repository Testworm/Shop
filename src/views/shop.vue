<template>
    <div id="shop">
     <div calss="putin">
       <div class="input-group">
         <input type="text" class="form-control" v-model="shop">
         <span class="input-group-addon" style="width: 30px">店铺</span>
           <input type="text" class="form-control" v-model="product">
           <span class="input-group-addon" style="width: 30px">商品</span>
         <input type="text" class="form-control" v-model="start_time">
         <span class="input-group-addon" style="width: 30px">起始时间</span>
         <input type="text" class="form-control" v-model="end_time">
         <span class="input-group-addon" style="width: 30px">结束时间</span>
       </div>
       <button type="button" class="btn btn-default" @click="cleanData">清理数据</button>
       <button type="button" class="btn btn-default" @click="qryByProduct">商品查询</button>
       <button type="button" class="btn btn-default" @click="qryByShop">店铺查询</button>
       <button type="button" class="btn btn-default" @click="qryMoneyByTime">时间查询</button>

     </div>

      <div class="result">
        <table class="table table-hover">
          <thead>
          <tr>
            <th>店铺名称</th>
            <th>商品名称</th>
            <th>下单量</th>
            <th>下单金额/(元)</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="prod in products">
            <td>{{prod.shop}}</td>
            <td>{{prod.product}}</td>
            <td>{{prod.total_amount}}</td>
            <td>{{prod.total_pay}}</td>
          </tr>
          </tbody>
        </table>

      </div>
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
        cleanData() {
          server.cleanData().then((res) => {
            this.error_no = res.data.error_no;
            console.log(res.data.error_no);
            this.error_msg = res.data.error_msg;
            this.error_value = res.data.error_value;
            if(res.data.error_no==-1){
              this.$Modal.warning({
                title: res.data.error_value,
                content: res.data.error_msg
              })
            } else {
              this.$Modal.success({
                title: res.data.error_value,
                content: "数据已经清理完毕"
              })
            }
          })
        },
        qryByProduct() {
          // let info = {
          //   product: this.product
          //   // content: JSON.stringify({
          //   //   'b_id': this.b_id,
          //   //   'content': this.content
          //   // })
          // }
        // product: this.product
          server.qryByProduct(this.product).then((res) => {
            this.products = res.data.list;
            // console.log(res.data.list);
            // console.log(JSON.parse(res.data.list[0].content).content);
            // this.content1 = JSON.parse(res.data.list[0].content).content;
          })
        },
        qryByShop() {
          let info = {
            shop: this.shop
            // content: JSON.stringify({
            //   'b_id': this.b_id,
            //   'content': this.content
            // })
          }
          server.qryByShop(info).then((res) => {
            this.products = res.data.list;
            // console.log(res.data.list);
          })
        },
        qryMoneyByTime() {
          let info = {
            start_time:this.start_time,
            end_time: this.end_time,
            product: this.product,
            shop: this.shop
          }
          server.qryMoneyByTime(info).then((res)=>{
            this.products = res.data.list;
          })

        }
      },
        name: "shop"
    }
</script>

<style scoped>
.putin{
  height: 50px;
  background-color: beige;
}
.result{
  color: black;
}
</style>
