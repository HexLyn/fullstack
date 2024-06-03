<template>
  <div>
    <h2>console check</h2>
  </div>
</template>

<script setup>
import axios from 'axios';

const requestAPI = () => {
  const url = 'https://localhost:3000/todos/1';
  axios.get(url).then((response)=> {
    console.log('# response : ', response);
  });
}

requestAPI();

