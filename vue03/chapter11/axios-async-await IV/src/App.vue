<template>
    <div>
        <h2>console 네번째.</h2>
    </div>
</template>

<script setup>
import axios from 'axios';

const requestAPI = async () => {
    const url = '/api/todos';

    // post 메소드의 body 부분에 해당
    let data = { todo: '윗몸100셋', desc: '빠르게' };

    // 해당 url에 data를 담아서 날림
    const resp1 = await axios.post(url, data);
    console.log(resp1.data);
};

requestAPI();
</script>
