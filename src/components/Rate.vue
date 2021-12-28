<template>
    <div :style="fontstyle">
    <slot></slot>
        <div class="rate" @mouseout="mouseOut">
            <span class="star" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
            <span class="hollow" :style="fontwidth">
                <span
                    class="star"
                    @click="onRate(num)"
                    @mouseover="mouseOver(num)"
                    v-for="num in 5"
                    :key="num"
                >★</span>
            </span>
        </div>
    </div>
</template>
<script setup>
import { computed, defineProps, ref, defineEmits } from 'vue';
let props = defineProps({
    value: Number,
    modelValue: Number,
    theme: { type: String, default: 'orange' }
})
//console.log(props);
let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value));
const themeObj = { 'black': '#00', 'white': '#fff', 'red': '#f5222d', 'orange': '#fa541c', 'yellow': '#fadb14', 'green': '#73d13d', 'blue': '#40a9ff', }
const fontstyle = computed(() => {
    return `color:${themeObj[props.theme]}`;
})
let width = ref(props.modelValue);
function mouseOver(i) {
    width.value = i;
}
function mouseOut() {
    width.value = props.modelValue;
}
const fontwidth = computed(() => `width:${width.value}em;`)
//let emits=defineEmits('[update-rate]');
let emits = defineEmits(['update-rate', 'update:modelValue']);
function onRate(num) {
    //  emits('update-rate', num)
    emits('update:modelValue',num)
      }
</script>
<style scoped>
.rate {
    position: relative;
    display: inline-block;
}
.rate > span.hollow {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 0;
    overflow: hidden;

    white-space: nowrap;
}
.rate .star {
    display: inline-block;
    width: 1em;
}
</style>