<template>
    <div>
        <h2>App 컴포넌트</h2>
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
// 지역 컴포넌트 등록 방법: 사용 할 파일에서만 명시
import CheckboxItem from './components/CheckboxItem.vue';

export default {
    name: 'App',
    components: { CheckboxItem },
    data() {
        return {
            idols: [
                { id: 1, name: 'dk', checked: true },
                { id: 2, name: 'ddk', checked: false },
                { id: 3, name: 'dfk', checked: false },
                { id: 4, name: 'dtk', checked: false },
            ],
        };
    },
};
</script>
