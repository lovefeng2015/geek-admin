
<!-- <script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from './components/HelloWorld.vue'

</script> -->

<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="你好，极客时间" />
</template> -->
<!-- <template>
  <div>
    <router-link to="/">首页</router-link>|
    <router-link to="/about">关于</router-link>|
    <router-link to="/rate">评分</router-link>|
    <router-link to="/selfIncreasing">自增加</router-link>|
    <router-link to="/todoList">任务清单</router-link>
  </div>
  
<router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

<template>

<el-container>
 
<el-header>
<el-menu

  :default-active="activeIndex"
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
>
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template v-slot:title>我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template v-slot:title>选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"
    ><a href="https://element3-ui.com" target="_blank"
      >订单管理</a
    ></el-menu-item
  >
</el-menu>

  </el-header>
  <el-container>
    <el-aside width="200px">
      <div>
        <router-link to="/"> Home</router-link> 
      </div>
      <div>
        <router-link to="/about">About</router-link>
      </div>
      <div>
    <router-link to="/rate">评分</router-link>|
      </div>
      <div>
    <router-link to="/selfIncreasing">自增加</router-link>|
      </div>
      <div>
    <router-link to="/todoList">任务清单</router-link>
      </div>
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</el-container>
</template>

<script setup>
import { ref } from 'vue'
 let activeIndex = ref('1');
</script>
<style>
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
</style>