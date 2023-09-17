<template>
    <form class="w-1/2 h-1/2 bg-white rounded-md drop-shadow-lg p-8 flex flex-col items-center gap-3" @submit.prevent="login">
        <h3 class="text-blue-950 text-4xl font-bold mb-5">Login</h3>
        <div class="w-3/4 flex flex-col gap-2">
            <label for="email" class="text-lg text-blue-950 cursor-pointer">Email</label>
            <input type="text" placeholder="email" class="input input-bordered input-info w-full" id="email" v-model="form.email"/>
        </div>
        <div class="w-3/4 flex flex-col gap-2">
            <label for="password" class="text-lg text-blue-950 cursor-pointer">Password</label>
            <input type="password" placeholder="password" class="input input-bordered input-info w-full" id="password" v-model="form.password"/>
        </div>
        <p class="mt-5">Doesnt have an account ? <span @click="switchForm" class="text-blue-400 cursor-pointer hover:underline hover:text-blue-950">sign up</span></p>
        <button class="btn btn-info text-white w-3/4 text-xl">sign in</button>
    </form>
</template>

<script setup>
    const userStore = useUserStore()
    const props = defineProps({
        switchForm: {
            type: Function,
            required: true
        }
    })
    const { switchForm } = props
    const form = ({
        email: "",
        password: ""
    })
    const login = async() => {
        try {
            await userStore.handleLogin(form)
        } catch (error) {
            console.log(error)
        }
    }
</script>