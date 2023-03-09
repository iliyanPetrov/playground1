
<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>


<template>
    <footer>
        <span>footer content here!</span>
        <span><RouterLink to="/">Home</RouterLink></span>
        <span><RouterLink to="/sell">Sell</RouterLink></span>
        <span><RouterLink to="/buy">Buy</RouterLink></span>
        <span><RouterLink to="/rent">Rent</RouterLink></span>
    </footer>
</template>


<style scoped>
    footer{
        /* position: fixed; */
        /* bottom: 4px; */
        display: flex;
        gap:24px;
    }
</style>