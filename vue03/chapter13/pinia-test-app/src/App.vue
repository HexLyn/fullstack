<template>
    <div>
        <h2>TodoList 테스트(Composition API)</h2>
        <hr />
        <input type="text" v-model="todo" />
        <button @click="addTodoHandler">추가</button>
        <hr />
        <ul>
            <li v-for="todoItem in todoList">
                <span
                    style="cursor: pointer"
                    @click="toggleDone(todoItem.id)"
                >
                    {{ todoItem.todo }}
                    {{ todoItem.done ? '(완료)' : '' }}
                </span>
                &nbsp;&nbsp;&nbsp;
                <button @click="deleteTodo(todoItem.id)">
                    삭제
                </button>
            </li>
        </ul>
        <div>완료된 할 일 수 : {{ doneCount }}</div>
    </div>
</template>

<script setup>
import { useTodoListStore } from '@/stores/todoList.js';
import { ref, computed } from 'vue';

// 문자열 반응성 처리 해주기 위해 ref로 감쌌다.
const todo = ref('');

const todoListStore = useTodoListStore();
// 구조 분해 할당으로 store내에서 return한 데이터들을 가져왔다.
const { todoList, addTodo, deleteTodo, toggleDone } =
    todoListStore;

const doneCount = computed(() => todoListStore.doneCount);

const addTodoHandler = () => {
    addTodo(todo.value);
    // 스토어에서 가져온 addTodo사용.
    todo.value = '';
    // todo.value를 빈 값으로 초기화 하는 코드.
    // 추가적인 기능이 있을 때는 가져온 것 그대로 쓰지않고 새로 핸들러 만들어줌.
};
</script>
