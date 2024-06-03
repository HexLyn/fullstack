<template>
    <div>
        <h2>console 첵ㅇ첵</h2>
    </div>
</template>

<script setup>
import axios from 'axios';

const listUrl = '/api/todos';
const todoUrlPrefix = '/api/todos/';

const requestAPI = () => {
    let todoList = [];
    axios
        .get(listUrl)
        .then((response) => {
            todoList = response.data;
            console.log('# TodoList :', todoList);
            return todoList[0].id;
        })
        .then((id) => {
            return axios.get(todoUrlPrefix + id);
        })
        .then((response) => {
            console.log('## first TODO :', response.data);
            return todoList[1].id;
        })
        .then((id) => {
            axios
                .get(todoUrlPrefix + id)
                .then((response) => {
                    console.log(
                        '## second TODO : ',
                        response.data
                    );
                });
        });
};

requestAPI();
</script>
