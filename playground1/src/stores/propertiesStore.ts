import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePropertiesStore = defineStore("properties", () => {
  //   const count = ref(0)
  //   const doubleCount = computed(() => count.value * 2)
  //   function increment() {count.value++}
  //   return { count, doubleCount, increment }
  const properties = ref<Array<object>>([]);
  return { properties };
});
