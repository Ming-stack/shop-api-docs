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
        url: "/order",
        method: "POST",

        form: {
          keys: [
            { key: "note", label: "注释" },
            { key: "field", label: "字段" },
            { key: "type", label: "数据类型" },
          ],
          list: [
            { note: "商品编号", field: "number", type: "Number" },
            { note: "商品id", field: "commodity_id", type: "Number" },
            {
              note: "订单状态：0待支付,1已支付,2配货完成,3出库成功，4交易成功,5手动关闭，6超时关闭,7商家关闭",
              field: "state",
              type: "Number",
            },
            { note: "购买数量", field: "commodity_count", type: "Number" },
            { note: "用户id", field: "user_id", type: "Number" },
            {
              note: "token",
              field: "token",
              type: "String",
            },
          ],
        },
        res: {
          dataType: {
            code: 1,
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