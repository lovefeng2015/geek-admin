
 <script setup>
 import useFavicon from '../utils/favicon'
 let {favicon,reset}  = useFavicon()
 function loading(){
   favicon.value = '/geek.ico'
 }
</script>

<template>
  <button @click="loading">点击换页面图标</button><br>
  <button @click="reset">点击恢复原始图标</button>
</template>