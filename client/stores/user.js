import { defineStore } from "pinia";

export const useUserStore = defineStore('user', () => {
    const user = ref({
        id: null,
        role: ""
    })
    const token = typeof window !== 'undefined' ? localStorage.access_token : null
    const access_token = ref(token);

    const handleLogin = async(input) => {
        try {
            const response = await $fetch('http://localhost:4000/user/login', {
                method: "POST",
                body: input
            })

            localStorage.access_token = response.access_token
            access_token.value = response.access_token
        } catch (error) {
            throw(error.data)
        }
    }

    const handleRegister = async(input) => {
        try {
            console.log(input)
            const response = await $fetch('http://localhost:4000/user/register', {
                method: "POST",
                body: input
            })
        } catch (error) {
            throw(error.data)
        }
    }

    const handleLogout = () => {
        localStorage.clear()
        user.value = {}
        access_token.value = localStorage.access_token
    }
    return { user, access_token, handleLogin, handleRegister, handleLogout}
})