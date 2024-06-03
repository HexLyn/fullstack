<template>
    <div class="card card-body">
        <h2>djqtdj</h2>
        <p>pathwrong: {{ $route.fullPath }}</p>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
    created() {
        console.log(this.$route.params);
    },
};
</script>
