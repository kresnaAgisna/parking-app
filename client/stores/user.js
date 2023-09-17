import { defineStore } from "pinia";

export const useUserStore = defineStore('user', () => {
    const user = ref({})
    const access_token = ref(localStorage.access_token)

    const handleLogin = async(input) => {
        try {
            const response = await $fetch('http://localhost:4000')
        } catch (error) {
            console.log(error)
        }
    }
})