<template>
    <Navbar/>
    <div class="h-[92vh] w-[100vw] px-[7.5vw] flex flex-col py-5 gap-5">
        <Place :changeDestination="changeDestination"/>
        <div class="h-[40vh] w-full flex flex-col drop-shadow-md border border-info rounded-md bg-white gap-5 overflow-hidden relative">
            <div class="flex h-[15%] w-full border border-b-info gap-5 px-5">
                <div class="flex items-center w-1/3 h-full font-semibold text-blue-950">
                    <h3>{{ title ?  title : 'Choose your destination'}}</h3>
                </div>
                <div class="flex justify-center items-center w-1/3 h-full">

                </div>
                <div class="flex justify-center items-center w-1/3 h-full">

                </div>
            </div>
            <div class="flex justify-center items-center w-full h-[85%] px-5 text-2xl font-bold text-info" v-if="!placeStore.places.value">
                    Choose your destination first
            </div>
            <div class="flex justify-center w-full h-[85%] px-5 overflow-hidden gap-8 mt-16 cursor-pointer" name="circle" v-else>
                <div v-for="place in placeStore.places.value" key="place.id" class="w-32 h-32 bg-info rounded-full flex justify-center items-center text-2xl font-bold text-white
                hover:bg-blue-950 hover:opacity-90 duration-[0.4s] ease-in-out">
                    {{ place.section }}
                </div>
            </div>
            <button class="btn btn-info text-white w-40 absolute bottom-5 right-5 font-bold text-xl" disabled="true">Book</button>
        </div>
    </div>
</template>

<script setup>
    const placeStore = usePlaceStore()
    const title = ref('')

    const changeDestination = async(value) => {
        if(value === title.value) return
        try {
            await placeStore.fetchAllPlace(value)
            title.value = value
        } catch (error) {   
            console.log(error)
        }
    }

</script>

<style scoped>

</style>

