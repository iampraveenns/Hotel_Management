import { createSlice } from "@reduxjs/toolkit";
import initialHotels from "../data/hotels"

const loadHotels = () => {
    try {
        const savedHotels = localStorage.getItem("hotels")
        return savedHotels ? JSON.parse(savedHotels) : initialHotels
    } catch {
        return initialHotels
    }
}

const hotelSlice = createSlice({
    name: "hotels",
    initialState: loadHotels(),
    reducers: {
        setHotels: (state, action) => action.payload,
        addHotel: (state, action) => {
            state.push(action.payload)
        },
        updateHotel: (state, action) => {
            const index = state.findIndex(
                (hotel) => hotel.id === action.payload.id
            )

            if(index !== -1) {
                state[index] = action.payload
            }
        },

        deleteHotel: (state, action) => {
            return state.filter(
                hotel => hotel.id !== action.payload
            )
        },
    },
})

export const {
    setHotels,
    addHotel,
    updateHotel,
    deleteHotel,
} = hotelSlice.actions

export default hotelSlice.reducer

/* 
Hong kong, china

A 12-minute walk from Hung Hom railway station, this posh luxury hotel overlooking Kowloon Harbour is 7 minutes on foot from the Avenue of Stars promenade and 2 km from Temple Street Night Market.

Featuring city or harbour views, the polished rooms and suites provide Bose sound systems, Nespresso machines and minibars, plus flat-screen TVs, free Wi-Fi, and marble bathrooms with free-standing baths. Room service is available 24/7. Upgraded suites offer private butlers.

There's a sleek restaurant and a bar, as well as a bakery and a lounge. A spa area includes a fitness centre, and an outdoor pool with views of the harbour.

22.295161

116.175339
 */