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
        url: "/carousel/:page/:count",
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
          dataType: "/carousel/1/10",
        },
        form: {
          keys: [
            { key: "note", label: "注释" },
            { key: "field", label: "字段" },
            { key: "type", label: "数据类型" },
          ],
          list: [
            {
              note: "token",
              field: "token",
              type: "String",
            },
          ],
        },
        method: "POST",
        res: {
          keys: [
            { key: "note", label: "注释" },
            { key: "field", label: "字段" },
          ],
          list: [
            { note: "总共有几条数据", field: "total" },
            { note: "id", field: "id" },
            { note: "图片地址", field: "image_url" },
            { note: "链接地址", field: "link" },
            { note: "序号", field: "order" },
            { note: "创建日期", field: "create_date" },
            {
              note: "token",
              field: "token",
            },
          ],
          dataType: {
            total: 13,
            list: [
              {
                id: 0,
                image_url:
                  "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner-mate40.png",
                link: "http://test.com",
                order: 0,
                create_date: "2021-01-01",
              },
              {
                id: 1,
                image_url:
                  "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner1.png",
                link: "http://test.com",
                order: -1,
                create_date: "2021-01-01",
              },
              {
                id: 2,
                image_url:
                  "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/banner2.png",
                link: "http://test.com",
                order: -2,
                create_date: "2021-01-01",
              },
              {
                id: 10,
                link: "test",
                order: 0,
                create_date: "2020-11-11",
                image_url: "",
              },
              {
                id: 11,
                link: "test",
                order: 1,
                create_date: "2020-11-11",
                image_url:
                  "https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/184457/16/17762/97940/610bd56cE37e661d5/307868295cce4b1b.jpg!cr_1053x420_4_0!q70.jpg.dpg",
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