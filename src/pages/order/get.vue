<template>
  <layout>
    <Api :data="item" />
  </layout>
</template>

<script>
export default {
  data() {
    return {
      item: {
        url: "/order/:page/:count",
        urlObj: {
          keys: [
            { key: "note", label: "注释" },
            { key: "field", label: "字段" },
            { key: "type", label: "类型" },
          ],
          list: [
            {
              note: "第几页",
              field: "page",
              type: "Number",
            },
            {
              note: "要几条数据",
              field: "count",
              type: "Number",
            },
          ],
          dataType: "/order/1/10",
        },
        method: "POST",
        form: {
          keys: [
            { key: "note", label: "注释" },
            { key: "field", label: "字段" },
            { key: "type", label: "数据类型" },
          ],
          list: [
            {
              note: "token",
              field: "token",
              type: "String",
            },
          ],
        },
        res: {
          keys: [
            { key: "note", label: "注释" },
            { key: "field", label: "字段" },
            { key: "type", label: "数据类型" },
          ],
          list: [
            { note: "数据总量", field: "total", type: "Number" },
            { note: "id", field: "id", type: "Number" },
            { note: "订单号", field: "number", type: "Number" },
            { note: "价格", field: "price", type: "Number" },
            { note: "状态", field: "state", type: "Number" },
            { note: "支付方式", field: "pay_method", type: "String" },
            { note: "下单日期", field: "create_date", type: "String" },
          ],
          dataType: {
            total: 20815,
            list: [
              {
                id: 78,
                number: 78933,
                price: 496,
                state: 2,
                pay_method: "微信支付",
                create_date: "1981-12-13 01:33:10",
              },
              {
                id: 47,
                number: 97165,
                price: 897,
                state: 0,
                pay_method: "微信支付",
                create_date: "1993-10-26 21:54:33",
              },
              {
                id: 50,
                number: 54251,
                price: 164,
                state: 3,
                pay_method: "微信支付",
                create_date: "1977-04-14 01:18:47",
              },
              {
                id: 44,
                number: 90341,
                price: 730,
                state: 2,
                pay_method: "微信支付",
                create_date: "1991-08-27 00:38:35",
              },
              {
                id: 86,
                number: 94752,
                price: 17,
                state: 1,
                pay_method: "微信支付",
                create_date: "2011-08-02 14:57:08",
              },
            ],
          },
        },
      },
    };
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style>
.el-collapse-item__header {
  font-weight: 800;
  font-size: 16px;
}
</style>