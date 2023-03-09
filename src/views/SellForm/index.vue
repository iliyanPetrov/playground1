
<script setup lang="ts">
import { ref } from 'vue';
import { useUsersStore } from '../../stores/usersStore';
import { usePropertiesStore } from '../../stores/propertiesStore';
import SuccessModal from '@/components/SuccessModal.vue';

const usersStore = useUsersStore();
const propertiesStore = usePropertiesStore();

let saved = false;

let sellerName = ref<string>('');
let sellerEmail = ref<string>('');
let propertyAdress = ref<string>('');
let propertyType = ref<string>('');
let propertyPrice = ref<number>(0);
let propertyPurpose = ref<string>('');

const handleSave = () => {
    // CREATE OBJECTS
    let userObj = {
        "userId": usersStore.users.length + 1,
        sellerName,
        sellerEmail
    };
    let propertyObj = {
        "userId": userObj.userId,
        "propertyId": userObj.userId,
        propertyAdress,
        propertyType,
        propertyPrice,
        propertyPurpose
    };
    // PUSH OBJECTS
    usersStore.users.push(userObj);
    propertiesStore.properties.push(propertyObj);
    // RESET VARIABLES
    sellerName = ref('');
    sellerEmail = ref('');
    propertyAdress = ref('');
    propertyType = ref('');
    propertyPrice = ref(0);
    propertyPurpose = ref('');
    saved = true;
}

</script>


<template>
    <div>
        <br>
        SELL FORM PAGE HERE
        <hr><br>
        {{ usersStore.users }}
        {{ propertiesStore.properties }}
        <form>
            <label for="">Seller name:
                <input v-model="sellerName" required type="text"
                    placeholder="Your name.."></label>{{sellerName}}
            <label for="">Seller e-mail:
                <input v-model="sellerEmail" required type="text"
                    placeholder="owner@mail.com"></label>{{sellerEmail}}
            <label for="">Property adress:
                <input v-model="propertyAdress" required type="text"
                    placeholder="city/street/number"></label>{{propertyAdress}}
            <label for="">Property type:
                <input v-model="propertyType" required type="text"
                    placeholder="house/studio"></label>{{propertyType}}
            <label for="">Property price:
                <input v-model="propertyPrice" required type="number">
                    </label>{{propertyPrice}}
            <label for="">Property purpose:
                <input v-model="propertyPurpose" required type="text"
                    placeholder="rent/buy"></label>{{propertyPurpose}}
        </form>
        <br>
        <button @click.stop="handleSave()"> save </button>
        <SuccessModal v-show="saved"></SuccessModal>
    </div>
</template>


<style scoped>
form {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}
button{
    display: inline-block;
    padding: 2px 32px;
    margin-left: 24px;
}
</style>