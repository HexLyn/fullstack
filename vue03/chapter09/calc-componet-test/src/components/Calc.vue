<template>
    <div>
        X: <input type="text" v-model.number="x" /><br />
        Y: <input type="text" v-model.number="y" /><br />
    </div>
</template>

<script>
import { ref } from 'vue';

// composition API 내의 함수를 사용하려면 import필수
export default {
    name: 'Calc',
    setup() {
        // ref로 값형 데이터를 감싸줘야 반응형으로 동작한다.
        // 기존 옵션 API의
        const x = ref(10);
        const y = ref(20);
        return { x, y };
    },
};
</script>
