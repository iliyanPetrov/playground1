
<script setup lang="ts">
const handleSaveBtn = () => {
    //todo
}
</script>


<template>
    <section>
        <h2>SELL FORM PAGE USING FORMKIT FRAMEWORK</h2>
        <hr>
        <FormKit 
            type="form" 
            @submit="handleSaveBtn" 
            submit-label="Save" 
            #default="{value}"
        >
            <FormKit
                type="text"
                name="sellerName"
                label="Seller name"
                placeholder="Your full name"
                validation="required|length:1,72"
                validation-visibility="live"
            />
            <FormKit
                type="email"
                name="sellerName"
                label="Seller e-mail"
                placeholder="owner@mail.com"
                validation="required|email"
                validation-visibility="live"
            />
            <FormKit
                type="text"
                name="propertyAdress"
                label="Property adress"
                placeholder="city/street/number"
                validation="required|length:1,142"
                validation-visibility="live"
            />
            <FormKit
                type="text"
                name="propertyType"
                label="Property type"
                placeholder="house / studio"
                validation="required|is:house,studio"
                validation-visibility="live"
            />
            <FormKit
                type="text"
                name="propertyPrice"
                label="Property price"
                placeholder="e.g. $12.000"
                validation="required|number"
                validation-visibility="live"
            />
            <FormKit
                type="text"
                name="propertyPurpose"
                label="Property purpose"
                placeholder="rent / buy"
                validation="required|is:rent,buy"
                validation-visibility="live"
            />
        </FormKit>
    </section>
</template>


<style scoped>

</style>