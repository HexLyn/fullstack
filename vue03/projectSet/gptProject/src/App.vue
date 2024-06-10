<template>
    <div class="container">
        <Header />
        <router-view />
    </div>
</template>

<script setup>
import { reactive, computed, provide } from 'vue';
import Header from '@/components/Header.vue';

const BASEURI = '/api/Home';
const states = reactive({ todoList: [] });
</script>
