<script setup>
import {useFullscreen} from '@vueuse/core';
const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>
<template>
<h1 @click="toggle">click</h1>
</template>