import { configureStore } from "@reduxjs/toolkit"
import CountryReducer from "./countrySlice"

const store = configureStore({
    reducer: {
        country: CountryReducer
    }
})

export default store