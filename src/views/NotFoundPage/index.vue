
<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>


<template>
    <section>
        <br>
        <hr>
        <h1> 404 - Page not found ...</h1>
        <RouterLink to="/">Go To Home page</RouterLink>
        <hr>
    </section>
</template>


<style scoped>
    section {
        text-align: center;
        display: flex;
        flex-direction: column;
        row-gap: 24px;
    }
</style>