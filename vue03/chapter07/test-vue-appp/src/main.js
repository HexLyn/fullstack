import { createApp } from 'vue';

import App from './App.vue';

// import App2 from './App2.vue';

// 전역변수
import CheckboxItem from './components/CheckboxItem.vue';

createApp(App)
    .component('CheckboxItem', CheckboxItem)
    .mount('#app');
