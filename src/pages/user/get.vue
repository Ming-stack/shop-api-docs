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
        url: "/user/:page/:count",
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
          dataType: "/user/1/10",
        },
        method: "POST",
        form: {
          keys: [
            { key: "note", label: "注释" },
            { key: "field", label: "字段" },
            { key: "type", label: "类型" },
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
            { note: "角色", field: "role", type: "Number" },
            { note: "用户名", field: "name", type: "String" },
            { note: "密码", field: "password", type: "Number" },
            { note: "是否禁用", field: "disabled", type: "Number" },
            { note: "是否注销", field: "cancel", type: "Number" },
            { note: "个性签名", field: "signature", type: "String" },
            { note: "昵称", field: "nickname", type: "String" },
          ],
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