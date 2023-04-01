import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePropertiesStore = defineStore("properties", () => {
    //   const count = ref(0)
    //   const doubleCount = computed(() => count.value * 2)
    //   function increment() {count.value++}
    //   return { count, doubleCount, increment }
    
    const properties = ref<Array<object>>([
        {
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
        },
    ]);
    return { properties };
});
