
<script setup lang="ts">
import { ref } from 'vue';
import { useExperimentalStore } from '../../stores/experimentalStore';

const hasContent = ref<boolean>(false);
const experimentalStore = useExperimentalStore();
</script>


<template>
    <div>
        <header> <h1>Wellcome to Rent Page</h1> </header>
        <hr>
        <!-- <h2 v-if="!hasContent"> . . . no content to display yet. . . </h2> -->
    // TODO - display (probably computed) content depending on property.purpose

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
    border: 2px solid #E391BD;
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