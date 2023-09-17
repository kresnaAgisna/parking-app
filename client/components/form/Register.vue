<template>
    <form class="w-1/2 h-[70%] bg-white rounded-md drop-shadow-lg p-8 flex flex-col items-center gap-3" @submit.prevent="register">
        <h3 class="text-blue-950 text-4xl font-bold mb-5">Register</h3>
        <div class="w-3/4 flex flex-col gap-2">
            <label for="fullName" class="text-lg text-blue-950 cursor-pointer">Full Name</label>
            <input type="text" placeholder="full name" class="input input-bordered input-info w-full" id="fullName" v-model="form.fullName"/>
        </div>
        <div class="w-3/4 flex flex-col gap-2">
            <label for="email" class="text-lg text-blue-950 cursor-pointer">Email</label>
            <input type="email" placeholder="email" class="input input-bordered input-info w-full" id="email" v-model="form.email"/>
        </div>
        <div class="w-3/4 flex flex-col gap-2">
            <label for="phone" class="text-lg text-blue-950 cursor-pointer">Phone Number</label>
            <input type="text" placeholder="eg. +62.." class="input input-bordered input-info w-full" id="phone" v-model="form.phone"/>
        </div>
        <div class="w-3/4 flex flex-col gap-2">
            <label for="password" class="text-lg text-blue-950 cursor-pointer">Password</label>
            <input type="password" placeholder="password" class="input input-bordered input-info w-full" id="password" v-model="form.password"/>
        </div>
        <p class="mt-5">Already have an account ? <span @click="switchForm" class="text-blue-400 cursor-pointer hover:underline hover:text-blue-950">sign in</span></p>
        <button class="btn btn-info text-white w-3/4 text-xl">sign up</button>
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
    const form = ref({
        fullName: "",
        email: "",
        phone: "",
        role: "customer",
        password: ""
    })

    const register = async() => {
        try {
            await userStore.handleRegister(form.value)
            switchForm()
        } catch (error) {
            console.log(error)
        }
    }
</script>