
<script setup lang="ts">
import { ref } from 'vue';
const hasContent = ref<boolean>(false);

</script>


<template>
    <div>
        <header> <h1>Wellcome to Rent Page</h1> </header>
        <hr>
        <h2 v-if="!hasContent"> . . . no content to display yet. . . </h2>

    </div>
</template>


<style scoped>

</style>