<template>
    <div>
        <h2>console 쵹쵹.</h2>
    </div>
</template>

<script setup>
import axios from 'axios';

const requestAPI = async () => {
    let todoList;

    let response = await axios.get(listUrl);
    todoList = response.data;
    console.log('#todolist : ', todoList);
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
