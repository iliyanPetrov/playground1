<script setup lang="ts">
    import MainHeader from './components/MainHeader.vue';
    import MainFooter from './components/Footer.vue';
</script>


<template>
    <MainHeader />
    <main>
        <RouterView></RouterView>
    </main>
    <MainFooter />
</template>


<style >

</style>
