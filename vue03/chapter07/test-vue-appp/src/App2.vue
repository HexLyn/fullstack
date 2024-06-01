<template>
    <div>
        <h2>괌심가수</h2>
        <hr />
        <ul>
            <!-- v-for 반복문, in앞에는 아무거나 와도 상관없다. 
            관례적으로 배열과 비슷하게-->
            <CheckboxItem
                v-for="idol in idols"
                :key="idol.id"
                :name="idol.name"
                :checked="idol.checked"
            />
            <!-- name과 checked는 자식에게 
                props로 전달해주는 속성(사용자 정의) -->

            <!-- idols배열을 돌면서 idol 이라는 이름으로
                 객체 하나씩 접근 -->
        </ul>
    </div>
</template>

<script>
// 지역 컴포넌트 등록 방법: 사용 할 파일에서만 명시
import CheckboxItem from './components/CheckboxItem.vue';

export default {
    name: 'App',
    components: { CheckboxItem },
    data() {
        return {
            idols: [
                { id: 1, name: 'sj', checked: true },
                { id: 2, name: 'sk', checked: false },
                { id: 3, name: 'dnfl', checked: false },
                { id: 4, name: 'wjemf', checked: false },
            ],
            // idols [] 객체 배열.
        };
    },
};
</script>
