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
        url: "/commodity/type",
        method: "PUT",
        form: {
          keys: [
            { key: "note", label: "注释" },
            { key: "field", label: "字段" },
            { key: "type", label: "数据类型" },
          ],
          list: [
            { note: "id", field: "id", type: "Number" },
            { note: "跳转链接", field: "link", type: "String" },
            { note: "商品编号", field: "number", type: "Number" },
            { note: "商品名字", field: "name", type: "String" },
             {
              note: "token",
              field: "token",
              type: "String",
            },
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