import { defineStore } from "pinia";
import { ref } from "vue";

export const userStore = defineStore('user', ()=>{
    const count = ref(100);
    const userInfo = ref({})
    return {count}
  })