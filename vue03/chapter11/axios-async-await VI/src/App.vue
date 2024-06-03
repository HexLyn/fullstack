<template>
    <div>
        <h2>console dutjt에휴.</h2>
    </div>
</template>

<script setup>
import axios from 'axios';

const requestAPI = async () => {
    // todos2로 존재하지 않는걸 불렀기에 에러 메세지가 뜨는 것.
    const url = '/api/todos2';
    axios
        .get(url, { timeout: 900 })
        .then((response) => {
            console.log('dkdkdentitiy: ', response);
        })
        .catch((e) => {
            console.log(
                '아앙ㅇ아아아아아아앙아아아아아아아아아아아'
            );
            console.log(e);
            // e가 에러 타입인지 체크
            if (e instanceof Error) console.log(e.message);
            else console.log(e);
        });
};

requestAPI();
</script>
