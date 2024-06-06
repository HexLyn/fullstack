import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// counter라는 이름의 스토어 정의.
// 스토어에는 전역에서 쓸 데이터 들을 생성하는 역할.
export const useCounterStore = defineStore(
    'counter',
    () => {
        const count = ref(0);
        const doubleCount = computed(() => count.value * 2);
        // pinia에서의 함수들을 action이라 한다.
        function increment() {
            count.value++;
        }
        // 객체로 return을 해줘야 전역에서 사용 가능.
        return { count, doubleCount, increment };
    }
);
