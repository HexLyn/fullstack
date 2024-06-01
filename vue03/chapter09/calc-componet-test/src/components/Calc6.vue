<template>
    <div>
        x:
        <input type="text" v-model.number="state.x" /><br />
        <div>결과: {{ state.result }}</div>
    </div>
</template>

<script>
import { reactive, watch } from 'vue';

export default {
    name: 'Calc6',
    setup() {
        // state가 반응형이 된 것, x,result는 안에 넣어준 값.
        // state.x는 반응형 객체가 아니다.
        const state = reactive({ x: 0, result: 0 });
        watch(
            // 첫번째 인자로는 반응형 데이터가 반드시 와야한다.
            // 본 문제에서는 화살표 함수로 데이터 객체 접근 중.
            () => state.x,
            (current, old) => {
                console.log(`${old}->${current}`);
                state.result = current * 2;
            }
        );

        return { state };
    },
};
</script>
