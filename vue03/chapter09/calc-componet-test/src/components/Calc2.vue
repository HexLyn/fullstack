<template>
    <div>
        X: <input type="text" v-model.number="x" /><br />
        Y: <input type="text" v-model.number="y" /><br />
        <button @click="calcAdd">계산</button><br />
        <div>결과: {{ result }}</div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Calc2',
    setup() {
        const x = ref(10);
        const y = ref(20);
        const result = ref(30);
        // 익명 화살표함수를 calcAdd라는 변수에 넣어놨다.
        const calcAdd = () => {
            result.value = x.value + y.value;
        };

        // 리턴에 변수 뿐만이 아니라 함수도 넣어놔야한다.
        // 이렇게 해놔야 밖의 템플릿에서 사용이 가능하다.
        return { x, y, result, calcAdd };
    },
};
</script>
