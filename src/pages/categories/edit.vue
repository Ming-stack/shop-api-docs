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
        url: "/category/:id",
        method: "PUT",
        form: {
          keys: [
            { key: "note", label: "注释" },
            { key: "field", label: "字段" },
            { key: "type", label: "数据类型" },
          ],
          list: [
            { note: "新的名字", field: "name", type: "Number" },
            { note: "新的序号", field: "order", type: "String" },
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