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
        url: "/category/:page/:count",
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
          dataType: "/category/1/10",
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
              note: "父级id 可选参数",
              field: "parent_id",
              type: "Number",
            },
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
            { note: "父级id", field: "parent_id", type: "Number" },
            { note: "名字", field: "name", type: "String" },
            { note: "排序", field: "order", type: "Number" },
            { note: "创建日期", field: "create_date", type: "String" },
          ],
          dataType: {
            total: 48780,
            list: [
              {
                id: 54,
                parent_id: 98,
                name: "矿候先则整。",
                order: 42,
                create_date: "2003-02-04 00:31:44",
              },
              {
                id: 39,
                parent_id: 79,
                name: "电入名时整。",
                order: 64,
                create_date: "2007-03-15 00:45:34",
              },
              {
                id: 66,
                parent_id: 9,
                name: "温及成温传。",
                order: 88,
                create_date: "1981-08-03 00:45:31",
              },
              {
                id: 55,
                parent_id: 13,
                name: "用示位用完。",
                order: 73,
                create_date: "1972-08-12 11:02:36",
              },
              {
                id: 100,
                parent_id: 23,
                name: "断之色列叫。",
                order: 73,
                create_date: "1986-11-18 13:47:06",
              },
            ],
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