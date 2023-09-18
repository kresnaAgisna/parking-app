<template>
    <Navbar/>
    <div class="h-[92vh] w-[100vw] px-[7.5vw] flex py-5 gap-5 justify-center">
        <div class="h-[80vh] w-1/2 drop-shadow-md bg-white overflow-y-scroll">
            <div class="h-[15%] w-full border-b p-5 flex justify-between" v-for="history in slotStore.histories" key="history.id">
                <div>
                    <p class="text-xl font-bold">{{ history.Place.name }}</p>
                    <p>Time: {{ convertTime(history.start) }} - {{ convertTime(history.end) }}</p>
                    <p>Date: {{ formattedDate }}</p>
                </div>
                <div class="flex flex-col items-center gap-3">
                    <p class="text-4xl font-bold text-center text-blue-950">{{ history.Place.section }}</p>
                    <p>Status: <span class="text-info">{{ history.status }}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const slotStore = useSlotStore()
    const convertTime = (value) => {
       return value >= 10 ? `${value}:00` : `0${value}:00`
    }

    const today = new Date()
    const formattedDate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeZone: 'Asia/Jakarta' }).format(today)

    onMounted(async() => {
        await slotStore.bookingHistory()
    })
</script>

