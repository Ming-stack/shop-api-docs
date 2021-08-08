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
        url: "/order/:id",
        urlObj: {
          keys: [
            { key: "note", label: "注释" },
            { key: "field", label: "字段" },
            { key: "type", label: "类型" },
          ],
          list: [
            {
              note: "订单号id",
              field: "id",
              type: "Number",
            },
          ],
          dataType: "/order/1",
        },
        method: "POST",
        form: {
          keys: [
            { key: "note", label: "注释" },
            { key: "field", label: "字段" },
            { key: "type", label: "范例" },
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
            { note: "id", field: "id", type: "Number" },
            { note: "订单编号", field: "number", type: "Number" },
            { note: "订状态", field: "state", type: "Number" },
            { note: "下单日期", field: "create_date", type: "String" },
            { note: "总价", field: "price", type: "String" },
            { note: "商品名字", field: "commodity.name", type: "String" },
            { note: "购买数量", field: "commodity.count", type: "Number" },
            {note: "商品主图",field: "commodity.main_image_url",type: "String",},
            { note: "商品编号", field: "commodity.number", type: "String" },
          ],
          dataType: {
            id: 1,
            number: 1323232,
            commodity: {
              name: "e",
              number: 11,
              count: 1,
              main_image_url: "",
            },
            price: 100,
            state: 1,
            create_date: "创建时间",
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