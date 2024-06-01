<template>
    <div>
        x:
        <input type="text" v-model.number="x" /><br />
        <div>결과: {{ result }}</div>
    </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
    name: 'Calc5',
    setup() {
        const x = ref(0);
        const result = ref(0);

        // watch(감시할 대상, (현재값, 이전값))
        // current old가 아니어도됨.
        watch(x, (current, old) => {
            console.log(`${old}->${current}`);
            result.value = current * 2;
        });

        return { x, result };
    },
};
</script>
