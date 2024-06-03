<template>
    <div>
        <h2>console 쵹쵹.</h2>
    </div>
</template>

<script setup>
import axios from 'axios';

const requestAPI = () => {
    // const url = 'http://localhost:3000/todos/1';
    const url = '/api/todos/1';
    axios.get(url).then((response) => {
        console.log('# response entity :', response);
    });
};

requestAPI();
</script>
