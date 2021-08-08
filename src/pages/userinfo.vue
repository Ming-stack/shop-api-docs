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
        url: "/user/:id",
        method: "PUT",
        urlObj: {
          keys: [
            { key: "note", label: "注释" },
            { key: "field", label: "字段" },
          ],
          list: [
            {
              note: "用户id",
              field: "id",
            },
          ],
        },

        form: {
          keys: [
            { key: "note", label: "注释" },
            { key: "field", label: "字段" },
          ],
          list: [
            { note: "用户名", field: "name" },
            { note: "密码", field: "password" },
            { note: "昵称", field: "nickname" },
            {
              note: "令牌",
              field: "token",
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