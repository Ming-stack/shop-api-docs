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
        url: "/commodity/:type",
        urlObj: {
          keys: [
            { key: "note", label: "注释" },
            { key: "field", label: "字段" },
            { key: "type", label: "范例" },
          ],
          list: [
            {
              note: "类型 hot(热销), new(新品), recommand(为你推荐)",
              field: "type",
              type: "String",
            },
          ],
          dataType: "/commodity/hot",
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
            { note: "类型", field: "type", type: "String" },
            { note: "排序值", field: "order", type: "Number" },
            { note: "商品名字", field: "name", type: "String" },
            { note: "跳转链接", field: "link", type: "String" },
            { note: "商品编号", field: "number", type: "Number" },
          ],
        },
        res: {
          dataType: {
            code:1
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