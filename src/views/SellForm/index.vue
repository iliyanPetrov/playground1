
<script setup lang="ts">
import { ref } from 'vue';
import { useUsersStore } from '../../stores/usersStore';
import { usePropertiesStore } from '../../stores/propertiesStore';
import SuccessModal from '@/components/SuccessModal.vue';

const usersStore = useUsersStore();
const propertiesStore = usePropertiesStore();

let saved = false;
let unableToSave = false;
let formIsValid = false;

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

    if (formIsValid){
        // PUSH OBJECTS
        usersStore.users.push(userObj);
        propertiesStore.properties.push(propertyObj);
        
        // RESET VARIABLES
        saved = true;
        setTimeout(() => {
            saved = false;
        }, 3000);

        sellerName.value = '';
        sellerEmail.value = '';
        propertyAdress.value = '';
        propertyType.value = '';
        propertyPrice.value = 0;
        propertyPurpose.value = '';

    }else{
        unableToSave = true;
        setTimeout(() => {
            unableToSave = false;
        }, 5000);
    }
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
        <p v-show="unableToSave">Please fill all the required fields...</p>
            <br>
            <label for="">Seller name: 
            <input v-model="sellerName" required type="text"
                    placeholder="Your name.."> *</label>{{sellerName}}
            <label for="">Seller e-mail:
                <input v-model="sellerEmail" required type="text"
                    placeholder="owner@mail.com"> *</label>{{sellerEmail}}
            <label for="">Property adress:
                <input v-model="propertyAdress" required type="text"
                    placeholder="city/street/number"> *</label>{{propertyAdress}}
            <label for="">Property type:
                <input v-model="propertyType" required type="text"
                    placeholder="house/studio"> *</label>{{propertyType}}
            <label for="">Property price:
                <input v-model="propertyPrice" required type="number"> *
                    </label>{{propertyPrice}}
            <label for="">Property purpose:
                <input v-model="propertyPurpose" required type="text"
                    placeholder="rent/buy"> *</label>{{propertyPurpose}}
        </form>
        <br>
        <button @click.stop="handleSave()"> save </button>
        <!-- <SuccessModal v-show="saved"></SuccessModal> -->
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
    border-radius: 4px;
    border: 2px solid transparent
}
button:hover {
    background-color: #f4e448;
    border: 2px solid #e1d143;
    box-shadow: 1px 1px 2px 1px rgba(34, 25, 40, 0.671)
}
p{
    color: rgb(24, 19, 57);
    background-color: rgb(223, 202, 61);
    padding: 24px;
    display: inline-block;
    width: 400px;
    border-radius: 4px;
}
</style>