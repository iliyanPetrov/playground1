
<script setup lang="ts">
import { ref } from 'vue';
import { useUsersStore } from '../../stores/usersStore';
import { usePropertiesStore } from '../../stores/propertiesStore';

const usersStore = useUsersStore();
const propertiesStore = usePropertiesStore();
let saved = false;

const formData = ref({
    sellerName: '',
    sellerEmail: '',
    propertyAdress: '',
    propertyType: '',
    propertyPrice: 0,
    propertyPurpose: ''
});

const handleSaveBtn = (data: any) => {
    // function handleSaveBtn(formData: any) {
        console.log(data)
    //CREATE OBJECTS
    let userObj = {
        "userId": usersStore.users.length + 1,
        "sellerName": data.sellerName,
        "sellerEmail": data.sellerEmail
    };

    let propertyObj = {
        "userId": userObj.userId,
        "propertyId": userObj.userId,
        "propertyAdress": data.propertyAdress,
        "propertyType": data.propertyType[0],
        "propertyPurpose": data.propertyPurpose[0],
        "propertyPrice": data.propertyPrice,
    };

    usersStore.users.push(userObj);
    propertiesStore.properties.push(propertyObj);

    //RESET VARIABLES
    data.sellerName = '';
    data.sellerEmail = '';
    data.propertyAdress = '';
    data.propertyType[0] = '';
    data.propertyPurpose[0] = '';
    data.propertyPrice = 0;

}
</script>


<template>
    <section>
        <h2>SELL FORM PAGE USING FORMKIT FRAMEWORK</h2>
        <hr>
        <br>
        <FormKit 
            type="form"
            submit-label="Save"
            :submit-attrs="{
                inputClass: 'my-input-class',
                wrapperClass: 'my-wrapper-class',
                }"
            @submit="handleSaveBtn"
            :value="formData"
        >
            <div>
               <span> usersStore: {{ usersStore.users }} </span>
               <span> propertiesStore: {{ propertiesStore.properties }} </span>
            <!-- <br> -->
                <FormKit
                    type="text"
                    name="sellerName"
                    label="Seller name"
                    placeholder="Your full name"
                    validation="required|length:1,72"
                    validation-visibility="dirty"
                    
                />
            <!-- <br> -->
                <FormKit
                    type="email"
                    name="sellerEmail"
                    label="Seller e-mail"
                    placeholder="user@mail.com"
                    validation="required|emaillength:1,80"
                    validation-visibility="dirty"
                    
    
                />
            <!-- <br> -->
                <FormKit
                    type="text"
                    name="propertyAdress"
                    label="Property adress"
                    placeholder="City, street, number .."
                    validation="required|length:1,152"
                    validation-visibility="dirty"
                    
    
                />
            <!-- <br> -->
                <FormKit
                    type="checkbox"
                    name="propertyType"
                    label="Property type"
                    :options="['house', 'studio']"
                    validation="required|min:1| max:1"
                    validation-visibility="dirty"
                    
                />
            <!-- <br> -->
                <FormKit
                    type="checkbox"
                    name="propertyPurpose"
                    label="Property purpose"
                    :options="['rent', 'buy']"
                    validation="required|min:1| max:1"
                    validation-visibility="dirty"
                    
                    :classes="{
                        input: 'myInput',
                        label: 'myLabel'
                    }"
                />
            <!-- <br> -->
                <FormKit
                    type="text"
                    name="propertyPrice"
                    label="Property price"
                    placeholder="e.g. $12.000"
                    validation="required|number|min:100"
                    validation-visibility="dirty"
                    
                />  
            <!-- <br> -->
            </div>
        </FormKit>
        <br>
        <!-- <button type="button" @click.stop="handleSaveBtn()"> Save </button> -->
    </section>
</template>


<style scoped>
    section {
        padding: 48px;
        max-width: 600px;
        min-width: 67vw;
        /* text-align: center; */
    }

    div {
        display: flex;
        flex-direction: column;
        gap:24px
    }

    button, my-input-class {
        display: inline-block;
        padding: 3px 32px;
        /* margin-left: 24px; */
        border-radius: 3px;
        border: 2px solid transparent
    }
    button:hover, button:focus, my-input-class {
        background-color: #f4e448;
        border: 2px solid #e1d143;
        box-shadow: 1px 1px 6px 1px rgba(28, 20, 33, 0.809);
    }
    button:active, my-input-class {
        position: relative;
        top: 1px;
        box-shadow: 0px 0px 0px 1px rgba(28, 20, 33, 0.809)

    }
    myInput, my-input-class{
        border-radius: 12px;
        border-color: red;
    }
</style>