
<script setup lang="ts">
import { ref } from 'vue';
import { useUsersStore } from '../../stores/usersStore';
import { usePropertiesStore } from '../../stores/propertiesStore';
import { useExperimentalStore } from '../../stores/experimentalStore';

// const usersStore = useUsersStore();
// const propertiesStore = usePropertiesStore();

const experimentalStore = useExperimentalStore();
// const hasContent = ref<boolean>(false);

</script>


<template>
    <div>
        <header> <h1>Wellcome to Buy Page</h1> </header>
        <hr>
        <!-- <h2 v-if="!hasContent"> . . . no content to display . . . </h2> -->
        <div class="wrapper">
            <article class="singleCard" v-for="property of experimentalStore.$state">
                <h4> Owner / Seller ID: {{ property.propertyId }}</h4>
                <p>Adress: {{ property.propertyAdress }}</p>
                <p>Purpose: {{ property.propertyPurpose }}</p>
                <p>Type: {{ property.propertyType }}</p>
                <p>Price: {{ property.propertyPrice }}</p>
            </article>
        </div>

    </div>
</template>


<style scoped>
.singleCard{
    padding: 24px;
    border: 2px solid #CC91E3;
    border-radius: 8px;
    display: flex;
    gap: 8px;
    flex-direction: column;
    max-width: 400px;

}
.wrapper{
    padding: 16px 24px;
    display: flex;
    gap: 16px;
    flex-direction: column;
}
</style>