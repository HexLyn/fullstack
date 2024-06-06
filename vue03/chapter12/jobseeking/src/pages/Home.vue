<template>
    <!-- 제목 -->
    <div class="card card-body">
        <h2>취업 준비 리스트</h2>
    </div>
    <!-- addtodo -->
    <div class="row mb-3">
        <div class="col">
            <div class="input-group">
                <input
                    type="text"
                    class="form-control"
                    placeholder="취준 계획 입력"
                    v-model.trim="todo"
                    @keyup.enter="addTodoHandler"
                />
                <span
                    class="btn btn-primary input-group-addon"
                    @click="addTodoHandler"
                    >추가</span
                >
            </div>
        </div>
    </div>
    <!-- 리스트 -->
    <div class="row">
        <div class="col p-3">
            <router-link
                class="btn btn-primary"
                to="/todos/add"
            >
                할일 추가
            </router-link>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <ul class="list-group">
                <TodoItem
                    v-for="todoItem in todoList"
                    :key="todoItem.id"
                    :todoItem="todoItem"
                />
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InputTodo',
    data() {
        return { todo: '' };
    },
    emits: ['add-todo'],
    methods: {
        addTodoHandler() {
            this.$emit('add-todo', this.todo);
            this.todo = '';
        },
    },
};
import { inject } from 'vue';
import TodoItem from '@/components/TodoItem.vue';

const todoList = inject('todoList');
</script>
