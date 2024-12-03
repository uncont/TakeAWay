import { defineStore } from "pinia";
import { ref } from "vue";

export const userStore = defineStore('user', ()=>{
    const count = ref(100);
<<<<<<< HEAD
    const userInfo = ref({})
    return {count}
=======
    const name = ref('')
    function add () {
      count.value++
    }
    return {count , add}
>>>>>>> saber
  })