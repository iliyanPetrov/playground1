import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useExperimentalStore = defineStore({
    id: 'experimentalStore',
    state: () => (
        [{
        userId: 1,
        propertyId: 1,
        propertyAdress: "Varna, blv. Vasil Levski, No. 10",
        propertyType: "studio",
        propertyPurpose: "rent",
        propertyPrice: 1000,
    },
    {
        userId: 2,
        propertyId: 2,
        propertyAdress: "Sofia, blv. Hristo Botev, No.20",
        propertyType: "house",
        propertyPurpose: "buy",
        propertyPrice: 2000,
    }])
});
