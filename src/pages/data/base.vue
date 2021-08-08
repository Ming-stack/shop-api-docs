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
        url: "/data/base",
        method: "POST",
        form: {
          keys: [
            { key: "field", label: "字段" },
            { key: "note", label: "注释" },
          ],
          list: [
            {
              field: "token",
            },
            {
              field: "start",
              note: '开始日期（格式 2020-03-12)'
            },
            {
              field: 'count',
              note: '取几天'
            }
          ],
        },
        res: {
          keys: [
            { key: "note", label: "注释" },
            { key: "field", label: "字段" },
            { key: "type", label: "数据类型" },
          ],
          list: [
            { note: "今日订单数", field: "order", type: "Number" },
            { note: "今日日活", field: "activity", type: "Number" },
            { note: "转化率", field: "rate", type: "String" },
            { note: "日期", field: "date", type: "String" },
            { note: "注册人数", field: "register", type: "Number" },
            { note: "活跃人数", field: "activity", type: "Number" },
            { note: "收入", field: "money", type: "String" },
            { note: "订单量", field: "order", type: "Number" },
            { note: "付费用户", field: "pay", type: "Number" },
          ],
          dataType: {
            order: 100,
            activity: 200,
            rate: "20%",
            list: [
              {
                date: "2020-03-12",
                pay: '200',
                register: 100,
                activity: 200,
                order: 300,
                money: 300,
              },
              {
                date: "2020-03-13",
                pay: '200',
                register: 1010,
                activity: 2010,
                order: 3010,
                money: 3010,
              },
              {
                date: "2020-03-14",
                pay: '200',
                register: 10110,
                activity: 20110,
                order: 30011,
                money: 30011,
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