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
        url: "/user/login",
        method: "POST",
        form: {
          keys: [
            { key: "note", label: "注释" },
            { key: "field", label: "字段" },
          ],
          list: [
            {
              note: "用户名",
              field: "name",
            },
            {
              note: "密码",
              field: "password",
            },
          ],
        },
        res: {
          keys: [
            { key: "note", label: "注释" },
            { key: "field", label: "字段" },
          ],
          list: [
            {
              note: "令牌",
              field: "token",
            },
            {
              note: "角色",
              field: "role",
            },
          ],
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