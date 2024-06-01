<template>
    <!-- bootstrap에선 container클래스 삽입 하면 자동 가운데 정렬. -->
    <div id="app" class="container">
        <div class="card card-body bg-light">
            <div class="title">:: Todolist App</div>
        </div>
        <div class="card card-default card-boderless">
            <div class="card-body">
                <InputTodo @add-todo="addTodo" />
                <TodoList
                    :todoList="todoList"
                    @delete-todo="deleteTodo"
                    @toggle-completed="toggleCompleted"
                />
            </div>
        </div>
    </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import InputTodo from './components/InputTodo.vue';

let ts = new Date().getTime();

export default {
    name: 'App',
    components: { InputTodo, TodoList },
    // 각 모듈들 에서 export로 내보내고,
    // app에서 import로 받아온 뒤 components로 등록.
    data() {
        return {
            todoList: [
                {
                    id: ts,
                    todo: '자전1',
                    completed: false,
                },
                {
                    id: ts + 1,
                    todo: '자전2',
                    completed: true,
                },
                {
                    id: ts + 2,
                    todo: '자전3',
                    completed: false,
                },
                {
                    id: ts + 3,
                    todo: '자전4',
                    completed: false,
                },
            ],
        };
    },
    methods: {
        addTodo(todo) {
            // todo로 받아온 문자열의 길이가 2 이상일 때 맨끝에 추가.
            if (todo.length >= 2) {
                this.todoList.push({
                    id: new Date().getTime(),
                    todo: todo,
                    completed: false,
                });
            }
        },
        deleteTodo(id) {
            let index = this.todoList.findIndex(
                (item) => id === item.id
            );
            this.todolist.splice(index, 1);
        },
        toggleCompleted(id) {
            let index = this.todoList.findIndex(
                (item) => id === item.id
            );
            this.todoList[index].completed =
                !this.todoList[index].completed;
        },
    },
};
</script>
