<template>
  <el-container style="height: 100vh">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <div class="logo">实战案例logo</div>
      <!-- 菜单区域 -->
      <el-menu>
        <el-menu-item index="1-1">table</el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <span>王小虎</span>
      </el-header>
      <el-main>
        <!-- 二级路由出口区域 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>
<style>
.logo{
  height: 60px;
  text-align: center;
  line-height: 60px;
  color:#333;
  text-shadow: 0 0 4px #b3c0d1;
  font-size: 20px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>
