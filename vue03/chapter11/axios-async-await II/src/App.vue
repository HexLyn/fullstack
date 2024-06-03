<template>
    <div>
        <h2>console 쵹2쵹2.</h2>
    </div>
</template>

<script setup>
import axios from 'axios';

const listUrl = '/api/todos';
const todoUrlPrefix = '/api/todos/';

const requestAPI = async () => {
    let todoList;

    // 함수 앞쪽에 async가 붙어있어야 안에서
    // await를 사용할 수 있다.
    let response = await axios.get(listUrl);
    todoList = response.data;
    console.log('#todolist : ', todoList);
    // 리스트의 길이만큼 돌면서 각각의 리스트 데이터 출력
    for (let i = 0; i < todoList.length; i++) {
        response = await axios.get(
            todoUrlPrefix + todoList[i].id
        );
        console.log(
            `# ${i + 1}번째 투두 : `,
            response.data
        );
    }
};

requestAPI();
</script>
