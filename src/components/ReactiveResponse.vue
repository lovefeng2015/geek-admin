<script setup>

import {reactive,computed,watchEffect} from 'vue'

let obj = reactive({
    count:1
})
let double = computed(()=>obj.count*2)
obj.count = 2
// console.log('数据被修改了',obj.count,double.value)
watchEffect(()=>{
    console.log('数据被修改了',obj.count,double.value)
})

</script>
<template></template>