<template>
    <div>
        X:
        <input type="text" v-model.number="state.x" /><br />
        Y:
        <input type="text" v-model.number="state.y" /><br />
        <button @click="calcAdd">계산</button><br />
        <div>결과: {{ state.result }}</div>
    </div>
</template>

<script>
import { reactive } from 'vue';

export default {
    name: 'Calc3',
    setup() {
        // reactive 내부의 참조형 데이터들 모두 반응성을 가지게 된다.
        // 참조형 데이터는 .value로 접근 할 필요없다.
        const state = reactive({
            x: 10,
            y: 20,
            result: 30,
        });

        const calcAdd = () => {
            state.result = state.x + state.y;
        };

        return { state, calcAdd };
    },
};
</script>
