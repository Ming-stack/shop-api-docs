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
        url: "/upload",
        method: "POST",
        form: {
          keys: [
            { key: "note", label: "注释" },
            { key: "field", label: "字段" },
          ],
          list: [
            { note: "支持单/多文件上传", field: "files" },
            {
              note: "token",
              field: "token",
            },
          ],
        },
        res: {
          dataType: [{ url: "http://upload.jpg" }],
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