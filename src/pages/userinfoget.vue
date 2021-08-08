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
        url: "/user/info",
        method: "POST",
        form: {
          keys: [
            { key: "field", label: "字段" },
          ],
          list: [
            {
              field: "token",
            },
          ],
        },
        res: {
          keys: [
            { key: "note", label: "注释" },
            { key: "field", label: "字段" },
          ],
          list: [
            { note: "用户id", field: "id" },
            { note: "角色", field: "role" },
            { note: "用户名", field: "name" },
            { note: "密码", field: "password" },
            { note: "是否禁用", field: "disabled" },
            { note: "是否注销", field: "cancel" },
            { note: "注册时间", field: "create_date" },
            { note: "个性签名", field: "signature" },
            { note: "昵称", field: "nickname" },
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