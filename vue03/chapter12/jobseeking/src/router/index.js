import { createRouter, createWebHistory } from 'vue-router';
import TodoList from '@/pages/TodoList.vue';
import AddTodo from '@/pages/AddTodo.vue';
import NotFound from '@/pages/NotFound.vue';
import Home from '@/pages/Home.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/todos',
            component: TodoList,
        },
        {
            path: '/todos/add',
            component: AddTodo,
        },

        {
            path: '/:paths(.*)*',
            component: NotFound,
        },
    ],
});

export default router;
