<script setup>
import {useFullscreen} from '@vueuse/core';
const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>
<template>
<h1 @click="toggle">点击切换全屏</h1>
</template>