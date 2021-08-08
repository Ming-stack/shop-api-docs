<template>
  <Layout>
    <nav ref="tableContent" id="tableContent">
      <h2>目录</h2>
      <div :key="key" v-for="(item, key) in defaultData">
        <h2>
          <a @click="goTo(key)" :href="`#${key}`">{{ key }} {{ item.note }}</a>
        </h2>
      </div>
    </nav>
    <hr />
    <h2>注释</h2>
    <div :key="key" v-for="(item, key) in defaultData">
      <h3 :id="key">{{ key }}</h3>
      <p>{{ item.note }}</p>
      <el-table :data="item.fieldes" stripe style="width: 100%">
        <el-table-column prop="name" label="字段名" width="180">
        </el-table-column>
        <el-table-column prop="detail" label="注释" width="180">
        </el-table-column>
      </el-table>
    </div>
    <div @click="toggleSidebar()" id="sidebar">
      <i class="el-icon-arrow-left"></i>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      defaultData: {
        address: {
          note: "保存用户收货地址",
          fieldes: [
            { name: "id", detail: "唯一标识" },
            { name: "name", detail: "收货姓名" },
            { name: "phone", detail: "电话号码" },
            { name: "province", detail: "省/市/区" },
            { name: "detail", detail: "详细地址" },
            {
              name: "is_default",
              detail: "是否是默认为收货地址，1代表是，0代表不是",
            },
            { name: "user_id", detail: "用户id和user关联" },
          ],
        },
        carousel: {
          note: "轮播图表",
          fieldes: [
            { name: "id", detail: "唯一标识" },
            { name: "image_url", detail: "图片地址" },
            { name: "link", detail: "跳转链接" },
            { name: "order", detail: "序号" },
            { name: "create_date", detail: "创建日期" },
          ],
        },
        categories: {
          note: "无限分类",
          fieldes: [
            { name: "id", detail: "唯一标识" },
            { name: "name", detail: "分类名字" },
            { name: "parent_id", detail: "父级id，默认-1代表没有" },
            { name: "order", detail: "序号" },
            { name: "create_date", detail: "创建日期" },
          ],
        },
        commodity: {
          note: "商品",
          fieldes: [
            { name: "id", detail: "唯一标识" },
            { name: "name", detail: "商品名字" },
            { name: "desc", detail: "商品简介" },
            { name: "sell_price", detail: "售价" },
            { name: "create_date", detail: "创建日期" },
            { name: "price", detail: "价格" },
            { name: "count", detail: "库存" },
            { name: "label", detail: "标签" },
            { name: "state", detail: "是否下架，1是，0否" },
            { name: "main_image_url", detail: "主图url" },
            { name: "category_id", detail: "分类id" },
            { name: "content", detail: "详细内容" },
          ],
        },
        dataLogin: {
          note: "统计用户登录",
          fieldes: [
            { name: "id", detail: "唯一标识" },
            { name: "user_id", detail: "用户id" },
            { name: "login_date", detail: "登录日期" },
          ],
        },
        dataPerson: {
          note: "统计用户登录,下单,注册等",
          fieldes: [
            { name: "id", detail: "唯一标识" },
            { name: "create_date", detail: "创建日期" },
            { name: "new_register", detail: "当天新增用户" },
            { name: "activity_user", detail: "当天活跃用户" },
            { name: "income", detail: "当天已付费用户" },
            { name: "order_num", detail: "当天下订单量" },
            { name: "pay_user", detail: "当日总收入" },
          ],
        },
        dataUser: {
          note: "统计订单交易成功",
          fieldes: [
            { name: "id", detail: "唯一标识" },
            { name: "order_success_total", detail: "订单交易成功总数" },
            { name: "user_id", detail: "用户id" },
          ],
        },
        cart: {
          note: "购物车",
          fieldes: [
            { name: "id", detail: "唯一标识" },
            { name: "commodity_id", detail: "商品id" },
            { name: "commodity_count", detail: "数量" },
            { name: "user_id", detail: "用户id" },
          ],
        },
        users: {
          note: "用户信息表",
          fieldes: [
            { name: "id", detail: "唯一标识" },
            {
              name: "role",
              detail: "角色 0超级用户 1管理员 2普通用户 3商家 4客服等",
            },
            { name: "username", detail: "用户名" },
            { name: "password", detail: "密码" },
            { name: "disabled", detail: "账户禁用：0没有禁用 1禁用" },
            { name: "cancel", detail: "账户注销：0没有注销 1注销" },
            { name: "signature", detail: "个性签名" },
            { name: "nickname", detail: "昵称" },
          ],
        },
        order: {
          note: "订单表",
          fieldes: [
            { name: "id", detail: "唯一标识" },
            {
              name: "state",
              detail:
                "订单状态：0待支付,1已支付,2配货完成,3出库成功，4交易成功,5手动关闭，6超时关闭,7商家关闭",
            },
            { name: "create_date", detail: "下单日期" },
            { name: "user_id", detail: "用户id" },
            { name: "number", detail: "商品编号" },
            { name: "price", detail: "总价钱" },
            { name: "commodity_id", detail: "商品id" },
            { name: "count", detail: "商品数量" },
          ],
        },
        webAppHomeCommodity: {
          note: "移动端首页商品配置",
          fieldes: [
            { name: "id", detail: "唯一标识" },
            {
              name: "type",
              detail: "类型：hot热销，new新品,recommand为你推荐",
            },
            { name: "create_date", detail: "日期" },
            { name: "order", detail: "序号" },
            { name: "name", detail: "商品名字" },
            { name: "link", detail: "跳转链接" },
            { name: "number", detail: "编号" },
          ],
        },
      },
    };
  },
  methods: {
    goTo(key) {
      window.location.hash = key;
    },
    toggleSidebar(){
      this.$refs.tableContent.classList.toggle('tableContent-animate')
    }
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
a {
  text-decoration: none;
  color: #666;
}
#tableContent {
  z-index: 100;
  width: 260px;
  padding: 10px;
}
#sidebar {
  display: none;
  position: fixed;
  right: 0;
  z-index: 1000;
  top: 50%;
  transform: translate(0,-50%);
  width: 50px;
  height: 70px;
  background: #ccc;
  color: #fff;
  justify-content: center;
  align-items: center;
}
#sidebar i{
  transform: scale(2);
}
@media (max-width: 700px) {
  #sidebar {
    display: flex;
  }
}
</style>
