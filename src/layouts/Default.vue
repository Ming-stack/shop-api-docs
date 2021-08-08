<template>
  <div class="layout">
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside ref="aside" width="220px">
        <el-menu
          :default-active="defaultActive"
          router
          :default-openeds="[computedIndex]"
        >
          <el-menu-item index="/">文档首页</el-menu-item>
          <el-menu-item index="/database">数据表</el-menu-item>
          <el-submenu index="baseApi">
            <template slot="title"> 基础API </template>
            <el-menu-item index="/baseApi/upload">文件上传</el-menu-item>
          </el-submenu>
          <el-submenu :index="adminIndex">
            <template slot="title"> 后台管理系统API </template>
            <el-menu-item index="/login">后台登录</el-menu-item>
            <el-menu-item index="/userinfoget">获取用户信息</el-menu-item>
            <el-menu-item index="/userinfo">密码/用户名修改</el-menu-item>
            <el-menu-item index="/data/base">大盘数据</el-menu-item>
            <el-menu-item index="/carousel/add">轮播图添加</el-menu-item>
            <el-menu-item index="/carousel/get">轮播图查询</el-menu-item>
            <el-menu-item index="/carousel/edit">轮播图编辑</el-menu-item>
            <el-menu-item index="/carousel/del">轮播图删除</el-menu-item>
            <el-menu-item index="/typecommodity/add"
              >热销/新品/推荐 添加</el-menu-item
            >
            <el-menu-item index="/typecommodity/get"
              >热销/新品/推荐 查询</el-menu-item
            >
            <el-menu-item index="/typecommodity/edit"
              >热销/新品/推荐 编辑</el-menu-item
            >
            <el-menu-item index="/typecommodity/del"
              >热销/新品/推荐 删除</el-menu-item
            >
            <el-menu-item index="/categories/add">分类 添加</el-menu-item>
            <el-menu-item index="/categories/get">分类 查询</el-menu-item>
            <el-menu-item index="/categories/edit">分类 编辑</el-menu-item>
            <el-menu-item index="/categories/del">分类 删除</el-menu-item>
            <el-menu-item index="/commodity/add">商品 添加</el-menu-item>
            <el-menu-item index="/commodity/get">商品 查询</el-menu-item>
            <el-menu-item index="/commodity/edit">商品 编辑</el-menu-item>
            <el-menu-item index="/commodity/del">商品 删除</el-menu-item>
            <el-menu-item index="/user/get">会员 查询</el-menu-item>
            <el-menu-item index="/user/edit">会员 编辑</el-menu-item>
            <el-menu-item index="/order/add">订单 添加</el-menu-item>
            <el-menu-item index="/order/edit">订单 编辑</el-menu-item>
            <el-menu-item index="/order/get">订单 查询</el-menu-item>
            <el-menu-item index="/order/getone">订单详情 查询</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-main>
          <slot />
        </el-main>
      </el-container>
    </el-container>
    <div @click="navToggle" id="navbar">
      <i class="el-icon-s-unfold"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: "",
      adminIndex: "",
      computedIndex: "",
      filterRoute: ["database", "/", "baseApi"],
    };
  },
  methods: {
    openSubMenu() {
      var flag = true;
      this.filterRoute.forEach((item) => {
        if (this.$route.fullPath.split("/")[1] == item) {
          flag = false;
          this.adminIndex = "11";
          this.computedIndex = item;
        }
      });
      if (flag) {
        this.computedIndex = this.$route.fullPath;
        this.adminIndex = this.$route.fullPath;
      }
    },
    navToggle() {
      this.$refs.aside.$el.classList.toggle("el-aside-animate");
    },
  },
  updated() {
    this.defaultActive = this.$route.fullPath;
    this.openSubMenu();
  },
  mounted() {
    this.openSubMenu();
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}
body .el-main {
  padding-top: 0;
}
.el-aside {
  height: 100vh;
  background-color: #fff;
}
#navbar {
  z-index: 100;
  position: fixed;
  top: 20px;
  left: 10px;
  font-size: 40px;
  background: #000;
  color: #fff;
  width: 50px;
  display: none;
  text-align: center;
}
@media (max-width: 700px) {
  #tableContent {
    position: fixed;
    transition: all 0.4s;
    z-index: 10;
    background-color: #000;
    width: 100%;
    color: #fff;
    top: 50%;
    transform: translate(100%, -50%);
    right: 0;
  }
  #tableContent h2 {
    font-size: 16px;
  }
  #tableContent a {
    color: #fff;
  }
  #navbar {
    display: block;
  }
  body {
    padding-top: 100px;
  }
  .el-aside {
    transform: translate(-100%);
    position: absolute;
    transition: all 0.4s;
    z-index: 10;
  }
  .el-aside-animate {
    transform: translate(0)!important;
  }
  .tableContent-animate {
    transform: translate(0, -50%)!important;
  }
}
</style>
