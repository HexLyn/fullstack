<template>
    <div>
        <h2>괌심가수s</h2>
        <hr />
        <ul>
            <CheckboxItem
                v-for="idol in idols"
                :key="idol.id"
                :idol="idol"
            />
            <!-- :idol은 자식에게 props로 전달해주는 사용자 정의 속성
            "idol"은 idols 배열을 돌며 객체 하나씩 접근 -->
        </ul>
    </div>
</template>

<script>
import CheckboxItem from './components/CheckboxItem2.vue';

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
        };
    },
};
</script>
