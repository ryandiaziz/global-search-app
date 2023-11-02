import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://restcountries.com/v3.1/name/"
const initialState = {
    suggestion: [],
    country: {},
    isNotFound: false,
}

export const searchCountry = createAsyncThunk("country/searchCountry", async (data, thunkAPI) => {
    try {
        const response = await axios({
            method: 'GET',
            url: URL + data + "?fields=name"
        })
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers: {
        setinitsuggestion: (state) => {
            state.suggestion = []
            state.isNotFound = false
        },
        setinitcountry: (state) => {
            state.country = {}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(searchCountry.fulfilled, (state, action) => {
            state.isNotFound = false
            state.suggestion = action.payload.slice(0, 5)
        })
        builder.addCase(searchCountry.rejected, (state) => {
            state.suggestion = []
            state.isNotFound = true
        })
    }
})

export default countrySlice.reducer
export const {
    setinitsuggestion,
    setinitcountry,
} = countrySlice.actions