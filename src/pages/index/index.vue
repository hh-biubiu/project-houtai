<template>
  <div>
    <el-container>
      <el-aside width="200px">
          <el-menu
      unique-opened
      router
      default-active="/index/home"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
       <el-menu-item index="/index/home">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>系统设置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/index/menu">菜单管理</el-menu-item>
          <el-menu-item index="/index/role">角色管理</el-menu-item>
          <el-menu-item index="/index/user">管理员管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-s-goods"></i>
          <span>商城管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/index/classify">商品分类</el-menu-item>
          <el-menu-item index="/index/spec">商品规格</el-menu-item>
          <el-menu-item index="/index/goods">商品管理</el-menu-item>
          <el-menu-item index="/index/member">会员管理</el-menu-item>
          <el-menu-item index="/index/slide">轮播图管理</el-menu-item>
          <el-menu-item index="/index/seckill">秒杀活动</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
            <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
        </el-breadcrumb>
            <div class="serout">
                <router-view></router-view>
            </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100vh;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
  .serout{
      margin: 20px 0px;
  }
</style>