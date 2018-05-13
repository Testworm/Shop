import axios from '../services/axios';

/**
 * 统一处理所有接口请求
 * 参数对象将会替换axios中默认参数中的键值对，其中可包含：
 * method
 * timeout
 * data
 * headers
 * dataType
 */
const server = {
  cleanData() {
    return axios('func_cleanData', {
      method: 'get',
      // data: data
    });
  },
  qryByProduct(data) {
    return axios('func_qry_product', {
      method: 'post',
      data: data,
      headers: {'Content-Type': 'application/x-www-from-urlencoded;charset=UTF-8;'}
    });
  },
  // ------------------图书管理系统接口-------------//
  qryTotalMoney() {
    return axios('func_qry_total_money', {
      method: 'get',
      // data: data,
      // 这边可以复写 headers
      // headers: {'Content-Type': 'application/json;charset=UTF-8;'}
    });
  },
  qryByShop(data) {
    return axios('func_qry_by_shop', {
      method: 'post',
      data: data,
      // headers: {'Content-Type': 'application/x-www-from-urlencoded;charset=UTF-8;'}
    })
  },
  qryMoneyByTime(data) {
    return axios('func_qry_money_time',{
      method: 'post',
      data: data
    })
  },
  qryProductTop() {
    return axios('func_qry_product_top',{
      method: 'post'
    })
  }
};
export default server;
