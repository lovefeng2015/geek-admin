
<template>
    <h1>这是关于页面</h1>
    <!-- <Rate :value="score"></Rate> -->
    <!-- <Rate :value="3.5"></Rate> -->
    <!-- <Rate :value="4" theme="red"></Rate>
    <Rate :value="1" theme="green"></Rate>-->
    <h2>你的评分是{{ score }}</h2>
    <!-- <Rate :value="score" @update-rate="update"></Rate> -->
    <Rate v-model="score" ></Rate>
</template>


<script setup>
import { ref } from 'vue'
import Rate from '../components/Rate.vue'
let score = ref(3.5);
//function update(num) { score.value = num }
</script>