import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';

export const useTodoListStore = defineStore(
    'todoList',
    () => {
        // 현재 state는 객체 상태이다.(중괄호에 싸여있음)
        // 위에서 reactive를 가져와서 반응성으로 사용가능해짐.
        const state = reactive({
            // todoList가 키값.
            //배열안에 또 객체가 들어있는 객체배열.
            todoList: [
                {
                    id: 1,
                    todo: 'ES6학습',
                    done: false,
                },
                {
                    id: 2,
                    todo: 'React학습',
                    done: false,
                },
                {
                    id: 3,
                    todo: 'ContextAPI 학습',
                    done: true,
                },
                {
                    id: 4,
                    todo: '야구경기 관람',
                    done: false,
                },
            ],
        });

        //action
        const addTodo = (todo) => {
            state.todoList.push({
                id: new Date().getTime(),
                todo,
                done: false,
            });
        };

        const deleteTodo = (id) => {
            let index = state.todoList.findIndex(
                (todo) => todo.id === id
            );
            state.todoList.splice(index, 1);
        };

        const toggleDone = (id) => {
            let index = state.todoList.findIndex(
                (todo) => todo.id === id
            );
            state.todoList[index].done =
                !state.todoList[index].done;
        };

        const doneCount = computed(() => {
            return state.todoList.filter(
                (todoItem) => todoItem.done === true
            ).length;
        });
        const todoList = computed(() => state.todoList);

        return {
            todoList,
            doneCount,
            addTodo,
            deleteTodo,
            toggleDone,
        };
    }
);
