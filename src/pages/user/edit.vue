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
        url: "/user",
        method: "PUT",

        form: {
          keys: [
            { key: "note", label: "注释" },
            { key: "field", label: "字段" },
            { key: "type", label: "数据类型" },
          ],
          list: [
            { note: "名字", field: "ids", type: "Array" },
            { note: "取消0/确定1禁用账户", field: "disabled", type: "Number" },
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