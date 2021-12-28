  <!-- <template>
    <div>
        <h1 @click="add">{{ count }}</h1>
    </div>
</template>


  <script setup>
import { ref } from 'vue';
let count = ref(1);
function add() {
    count.value++;
}
</script>

  <style>
h1 {
    color: red;
}
</style> -->
<template>
 
    <div>
        <input type="text" v-model="title" @keydown.enter="addTodo" />
        <button v-if="active < all" @click="clear">清理</button>
        <ul v-if="todos.length">
            <li v-for="todo in todos">
                <input type="checkbox" v-model="todo.done" />
                <span :class="{ done: todo.done }">{{ todo.title }}</span>
            </li>
        </ul>
        <div v-else>暂无数据</div>
        <div>
            全选
            <input type="checkbox" v-model="allDone" />
            {{ active }}/{{ all }}
        </div>
    </div>
</template>
<script setup>
import { computed, ref } from 'vue';
import { useMouse } from '../utils/mouse';
// import useStorage from '../utils/storage';
// let { x, y } = useMouse();
function useTodos() {
    let title = ref('');
    // let todos = ref([{ title: "学习vue", done: false }]);
    //let todos3 = ref(JSON.parse(localStorage.getItem('todos') || '[]'));
    // watchEffect(() => { localStorage.setItem('todos', JSON.stringify(todos.value)) });
    let todos = useStorage('todos', [{ title: "学习vue", done: false }]);
    function addTodo() {
        todos.value.push(
            {
                title: title.value,
                done: false
            }
        );
        title.value = '';
    }
    function clear() {
        todos.value = todos.value.filter(v => !v.done);
    }
    let active = computed(() => todos.value.filter(v => !v.done).length)

    let all = computed(() => todos.value.length);
    let allDone = computed({
        get: function () {
            return active === 0;
        },
        set: function (value) {
            todos.value.forEach(v => {
                v.done = value;
            });
        }
    })
    return { title, todos, addTodo, clear, active, all, allDone };
}
let { title, todos, addTodo, clear, active, all, allDone } = useTodos();
</script>


  <style scoped>

</style>