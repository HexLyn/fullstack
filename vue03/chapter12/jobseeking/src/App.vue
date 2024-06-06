<template>
    <div id="app" class="container">
        <Header />
        <router-view />
    </div>
</template>

<script setup>
import { computed, provide } from 'vue';
import Header from '@/components/Header.vue';

const addTodo = ({ todo, desc }) => {
    states.todoList.push({
        id: new Date().getTime(),
        todo,
        desc,
        done: false,
    });
};

const updateTodo = ({ id, todo, desc, done }) => {
    let index = states.todoList.findIndex(
        (todo) => todo.id === id
    );
    states.todoList[index] = {
        ...states.todoList[index],
        todo,
        desc,
    };
};

const deleteTodo = (id) => {
    let index = states.todoList.findIndex(
        (todo) => todo.id === id
    );
    states.todoList.splice(index, 1);
};

provide(
    'todoList',
    computed(() => states.todoList)
);
provide('actions', {
    addTodo,
    deleteTodo,
    updateTodo,
});
</script>
