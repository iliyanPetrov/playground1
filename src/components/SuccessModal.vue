
<script setup lang="ts">
    import { RouterLink } from 'vue-router';
</script>


<template>
    <aside>
        <h3>Property saved successfully!</h3>
        <button><RouterLink to="/"> Go To Home Page</RouterLink></button>    
    </aside>
</template>


<style scoped>
    button {
        color: #1f114d;
        background-color: #dce4ad;
        border-radius: 4px;
        border: 2px solid #1f114d ;
        display: inline-block;
        padding: 2px 32px;
        margin-left: 24px;
}
</style>