
<script setup lang="ts">
import { ref } from 'vue';
import { useUsersStore } from '../../stores/usersStore';
import { usePropertiesStore } from '../../stores/propertiesStore';

const usersStore = useUsersStore();
const propertiesStore = usePropertiesStore();

// const hasContent = ref<boolean>(false);

</script>


<template>
    <div>
        <header> <h1>Wellcome to Buy Page</h1> </header>
        <hr> // TODO...
        <!-- <h2 v-if="!hasContent"> . . . no content to display . . . </h2> -->
        <article v-for="property of propertiesStore.properties">
            <pre>Adress: {{ property.}}</pre>
        </article>

    </div>
</template>


<style scoped>

</style>