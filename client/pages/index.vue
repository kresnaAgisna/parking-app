<template>
   <Navbar/>
    <div class="h-[92vh] w-100vw flex relative overflow-hidden">
        <div class="w-1/2 h-full flex items-center justify-center">
            <img src="https://clipart-library.com/img/1883029.png" class="w-3/4 scale-x-[-1]">
        </div>
        <div class="w-1/2 h-full flex items-center justify-center">
            <FormLogin v-if="page === 'login'" :switchForm="switchForm"/>
            <FormRegister v-else :switchForm="switchForm"/>
        </div>
    </div>
</template>

<script setup>
    const page = ref('login')
    const switchForm = (value) => {
        page.value === 'login' ? value = 'register': value = 'login'
        return page.value = value
    }
</script>