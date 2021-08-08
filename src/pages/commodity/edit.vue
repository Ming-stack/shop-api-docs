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
        url: "/commodity/:id",
        method: "PUT",

        form: {
          keys: [
            { key: "note", label: "注释" },
            { key: "field", label: "字段" },
            { key: "type", label: "数据类型" },
          ],
          list: [
            { note: "名字", field: "name", type: "String" },
            { note: "详情", field: "content", type: "String" },
            { note: "编号", field: "number", type: "Number" },
            { note: "售价", field: "sell_price", type: "String" },
            { note: "价格", field: "price", type: "String" },
            { note: "简介", field: "desc", type: "String" },
            { note: "标签", field: "label", type: "String" },
            { note: "是否下架", field: "state", type: "Number" },
            { note: "主图", field: "main_image_url", type: "String" },
            { note: "分类", field: "category_id", type: "Number" },
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