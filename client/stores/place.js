import { defineStore } from "pinia";

export const usePlaceStore = defineStore('place', () => {
    const places = []

    const fetchAllPlace = async(input) => {
        try {
            const response = await $fetch('http://localhost:4000/place?place=' + input, {
                headers: {
                    access_token: localStorage.access_token
                }
            })
            places.value = response
        } catch (error) {
            throw(error)
        }
    }

    const emptyPlaces = () => {
        places.value = []
    }

    return { places, fetchAllPlace, emptyPlaces}
})