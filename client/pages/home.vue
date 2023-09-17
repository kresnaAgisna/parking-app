<template>
    <Navbar/>
    <div class="h-[92vh] w-[100vw] px-[7.5vw] flex flex-col py-5 gap-5">
        <Place :changeDestination="changeDestination"/>
        <div class="h-[40vh] w-full flex flex-col drop-shadow-md border border-info rounded-md bg-white overflow-hidden relative">
            <div class="flex h-[15%] w-full border border-b-info gap-5 px-5">
                <div class="flex items-center w-1/3 h-full">
                    <button :disabled="!slotStore.section" @click="slotStore.changeSection(null)">
                        <BootstrapIcon name="arrow-left-square-fill" class="text-3xl text-info"/>
                    </button>
                </div>
                <div class="flex justify-center items-center w-1/3 h-full">
                    <h3 class="font-semibold text-blue-950 text-xl">{{ title ?  title : 'Choose your destination'}}</h3>
                </div>
                <div class="flex justify-end items-center w-1/3 h-full gap-3" disabled>
                    <BootstrapIcon name="arrow-left-square-fill text-3xl text-info" @click="slotStore.changeDate(-1)"/>
                    <h3 class="w-[45%] text-center">{{ slotStore.formattedDate }}</h3>
                    <BootstrapIcon name="arrow-right-square-fill text-3xl text-info" @click="slotStore.changeDate(-1)"/>
                </div>
            </div>
            <div class="flex justify-center items-center w-full h-[85%] p-5 text-2xl font-bold text-info" v-if="!placeStore.places.value">
                    Choose your destination first
            </div>
            <div class="flex flex-col items-center w-full h-[85%] p-5 overflow-hidden gap-8" name="circle" v-else-if="!slotStore.section">
                <h3 class="text-2xl font-bold text-blue-950 my-3">Choose your parking section</h3>
                <div class="flex w-full justify-center gap-10">
                    <div v-for="place in placeStore.places.value" key="place.id" class="w-36 h-36 bg-info rounded-full flex justify-center items-center text-2xl font-bold text-white
                    hover:bg-blue-950 hover:opacity-90 duration-[0.4s] ease-in-out cursor-pointer" @click="pickSection(place.section, place.id)">
                        {{ place.section }}
                    </div>
                </div>
            </div>
            <div v-else class="flex flex-col items-center w-full h-[85%] p-5 overflow-hidden">
                <div class="w-full h-full flex flex-wrap gap-5 relative">
                    <div v-for="(el, index) in array" key="index" @click="pickDate(index + 9)"
                        :class="`${ changeColor(index + 9) || otherDateColor(index + 9) ?  ' bg-info ' : ' bg-blue-950 '}
                        ${showBooked(index + 9) ? ' opacity-75 ' : ' opacity-100 '}
                        h-28 w-28 text-white flex justify-center items-center rounded-md text-2xl cursor-pointer `"
                        :disabled="slotStore.booked ? showBooked(index + 9): true">
                        {{ index + 9 >= 10 ? `${index + 9}:00`: `0${index + 9}:00` }}
                    </div>
                </div>
                <button @click="book" class="btn btn-info text-white text-2xl font-bold absolute bottom-5 right-5" :disabled="selectedRange.length < 2">Book</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    const placeStore = usePlaceStore()
    const slotStore = useSlotStore()
    const selectedRange = ref([])
    const title = ref('')
    const array = new Array(14).fill(null)

    const changeDestination = async(value) => {
        if(value === title.value) return
        try {
            await placeStore.fetchAllPlace(value)
            title.value = value
        } catch (error) {   
            console.log(error)
        }
    }

    const pickDate = (value) => {
        if(value === selectedRange.value[0]) return selectedRange.value = []
        if(value < selectedRange.value[0] || value - selectedRange.value[0] < 2) return
        if(showBooked(value)) return
        try {
            if(selectedRange.value.length < 2) {
                return selectedRange.value.push(value)
            }
            return selectedRange.value = []
        } catch (error) {
            console.log(error)
        }
    }

    const pickSection = async(code, id) => {
        try {
            await slotStore.changeSection(code, id)
        } catch (error) {
            console.log(error)
        }
    }

    const changeColor = (value) => {
        if(selectedRange.value.indexOf(value) !== -1) {
            return true
        } else {
            return false
        }
    }

    const otherDateColor = (value) => {
        if(!selectedRange.value) return false
        if(value >= selectedRange.value[0] && selectedRange.value[1] && value <= selectedRange.value[1]) return true
        return false
    }

    const book = async() => {
        try {
            await slotStore.bookParkingSpot(selectedRange.value)
        } catch (error) {
            console.log(error)
        }
    }

    const showBooked = (value) => {
        if(slotStore.booked.indexOf(value) === -1) return false
        return true
    }

</script>


