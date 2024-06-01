<template>
    <div>
        <h2>괌심가수s</h2>
        <hr />
        <ul>
            <CheckboxItem
                v-for="idol in idols"
                :key="idol.id"
                :name="idol.name"
                :checked="idol.checked"
            />
        </ul>
    </div>
</template>

<script>
import CheckboxItem from './components/CheckboxItem.vue';

export default {
    name: 'App',
    components: { CheckboxItem },
    data() {
        return {
            // idols를 객체 배열로 만들어 줌
            // props 부분에서 checked의 기본값을 false로
            // 정해줬기 때문에 생략 가능
            idols: [
                { id: 1, name: 'sj', checked: true },
                { id: 2, name: 'sk' },
                { id: 3, name: 'dnfl' },
                { id: 4, name: 'wjemf' },
            ],
        };
    },
};
</script>
