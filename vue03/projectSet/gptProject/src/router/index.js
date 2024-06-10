import { createRouter, createWebHistory } from 'vue-router';
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
            path: '/:paths(.*)*',
            component: NotFound,
        },
    ],
});

export default router;
