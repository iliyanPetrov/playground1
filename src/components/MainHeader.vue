
<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>


<template>
    <header>
        <span>Main header</span>
        <span><RouterLink to="/">Home</RouterLink></span>
        <span><RouterLink to="/sell">Sell</RouterLink></span>
        <span><RouterLink to="/buy">Buy</RouterLink></span>
        <span><RouterLink to="/rent">Rent</RouterLink></span>
    </header>
</template>


<style scoped>
    header{
        display: flex;
        gap:25px;
    }
</style>