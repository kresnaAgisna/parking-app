
<template>
    <div class="bg-blue-950 h-[8vh] w-[100vw] px-[7.5vw] flex justify-between items-center drop-shadow-lg">
        <h3 class="text-white text-4xl font-bold cursor-pointer">Parking</h3>
        <button class="btn btn-info text-white" @click="logout" v-if="path === '/'">Admin</button>
        <div v-else class="flex gap-4 items-center">
            <NuxtLink to="/home" class="text-info font-bold text-xl hover:opacity-[0.8]">Home</NuxtLink>
            <NuxtLink to="/history" class="text-info font-bold text-xl hover:opacity-[0.8]">My Bookings</NuxtLink>
            <button class="btn btn-info text-white" @click="logout">Logout</button>
        </div>
    </div>
</template>

<script setup>
    const userStore = useUserStore()
    const route = useRoute()
    const { path } = route

    const logout = () => {
        userStore.handleLogout()
        navigateTo('/')
    }
</script>

<style scoped>
    .router-link-active {
        color: white;
        border-bottom: 1px solid white;
    }
</style>