import { defineStore } from "pinia";

export const useSlotStore = defineStore('slot', () => {
    const today = new Date()
    const formattedDate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeZone: 'Asia/Jakarta' }).format(today)
    const bookDate = ref(today)
    const section = ref('')
    const PlaceId = ref(null)
    const booked = ref([])
    const histories = ref([])

    const changeDate = async(input) => {
        try {
            console.log(bookDate)
        } catch (error) {
            throw(error)
        }
    }

    const changeSection = async(code, id) => {
        try {
            section.value = code
            PlaceId.value = id
            if(code && id) {
                await bookedSlot()
            }
        } catch (error) {
            throw(error)
        }
    }

    const bookingHistory = async() => {
        try {
            const response = await $fetch('http://localhost:4000/slot', {
                headers: {
                    access_token: localStorage.access_token
                }
            })

            histories.value = response
        } catch (error) {
            throw(error)
        }
    }

    const bookedSlot = async() => {
        try {
            const response = await $fetch('http://localhost:4000/slot?PlaceId=' + PlaceId.value, {
                headers: {
                    access_token: localStorage.access_token
                }
            })
            const unavailable = []
            response.forEach( resp => {
                for(let i = resp.start; i <= resp.end; i++ ) {
                    unavailable.push(i)
                }
            })

            booked.value = unavailable
        } catch (error) {
            throw(error)
        }
    }

    const bookParkingSpot = async(input) => {
        const duration = input[1] - input[0]
        const day = bookDate.value.getDate()
        const totalPrice = duration * 5000 + 5000
        const status = 'booked'
        const start = input[0]
        const end = input[1]
        try {
            const response = await $fetch('http://localhost:4000/slot', {
                method: "POST",
                headers: {
                    access_token: localStorage.access_token
                },
                body: {
                    duration,
                    day,
                    totalPrice,
                    status,
                    PlaceId: PlaceId.value,
                    start,
                    end
                }
            })

           await bookedSlot()
        } catch (error) {
            throw(error.data)
        }
    }

    return { section, formattedDate, booked, histories, changeDate, changeSection, bookParkingSpot, bookingHistory }
})