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
        url: "/commodity/:type/:page/:count",
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
          dataType: "/commodity/hot/1/10",
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
            { note: "类型", field: "type", type: "String" },
            { note: "名字", field: "name", type: "String" },
            { note: "序号", field: "order", type: "Number" },
            { note: "创建日期", field: "create_date", type: "String" },
            { note: "跳转链接", field: "link", type: "String" },
            { note: "编号", field: "number", type: "Number" },
          ],
          dataType: {
            total: 34725,
            list: [
              {
                id: 43,
                type: "type",
                name: "许学自例验。",
                order: 27,
                create_date: "2015-07-26 03:40:07",
                link: "telnet://sbuh.mobi/mfsri",
                number: 5576368028148085,
              },
              {
                id: 86,
                type: "type",
                name: "方回广取边。",
                order: 34,
                create_date: "1991-07-14 02:54:06",
                link: "rlogin://nxyeps.lk/qxm",
                number: 4873512426599645,
              },
              {
                id: 16,
                type: "type",
                name: "合使周管大。",
                order: 93,
                create_date: "2018-08-21 07:13:54",
                link: "mailto://stvgthnq.se/uriovskc",
                number: 2719732520713476,
              },
              {
                id: 65,
                type: "type",
                name: "把层过存各。",
                order: 5,
                create_date: "2016-01-10 17:23:24",
                link: "prospero://fowczshuk.md/kuobcey",
                number: 8864022425876540,
              },
              {
                id: 94,
                type: "type",
                name: "展究且统称。",
                order: 53,
                create_date: "1985-06-01 23:59:35",
                link: "gopher://umauiyeuo.fk/sufmpfvosj",
                number: 3352335557926776,
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