<template>
    <div>
        <h2>console 다섯에휴.</h2>
    </div>
</template>

<script setup>
import axios from 'axios';

const requestAPI = async () => {
    // todos2로 존재하지 않는걸 불렀기에 에러 메세지가 뜨는 것.
    const url = '/api/todos2';
    // try는 api/todo2를 불러오는데 성공했을 때,
    try {
        const response = await axios.get(url, {
            timeout: 900,
        });
        console.log('#응답에휴:', response);
        // catch는 api/todo2를 불러오는데 실패했을 때,
    } catch (e) {
        console.log('##담 오류헤유ㅜ');
        if (e instanceof Error) console.log(e.message);
        else console.log(e);
    }
};

requestAPI();
</script>
