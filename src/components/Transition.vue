
<template>
<!-- <div class="box" :style="{width:width+'px'}"></div>
<button @click="change">click</button> -->
<div class="box1"></div>
</template>
<script setup>
import { ref } from 'vue';

let width=ref(100);
function change(){
    width.value+=100;
}
</script>
<style scoped>
.box{
    height: 100px;
    background-color: red;
    transition: width 1s linear;
}
.box1{
    width: 30px;
    height: 30px;
    position: relative;
    background-color: #d88986;
    animation: move 2s  linear infinite;
    
}
@keyframes move {
    0% {left:0}
    50% {left:200px}
    100% {left:0}
}
</style>