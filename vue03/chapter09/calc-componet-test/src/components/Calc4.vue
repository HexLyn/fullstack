<template>
    <div>
        X:
        <input type="text" v-model.number="state.x" /><br />
        Y:
        <input type="text" v-model.number="state.y" /><br />

        <div>결과: {{ result }}</div>
    </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
    name: 'Calc4',
    setup() {
        const state = reactive({
            x: 10,
            y: 20,
        });

        // computed함수로 어차피 바로바로 리턴이 되는 구성이기 때문에
        // Calc3처럼 result를 return할 필요가 없다.
        // 기존 옵션 API의 computed 옵션과 동일한 역할.
        const result = computed(() => {
            return state.x + state.y;
        });

        return { state, result };
    },
};
</script>
