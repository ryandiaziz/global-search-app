import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://restcountries.com/v3.1/name/"
const initialState = {
    suggestion: [],
    altSpellings: [],
    latlong: [],
    countryData: {},
    isLoading: false,
    isNotFound: false,
    currencies: [],
    callingCodes: []
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

export const detailCountry = createAsyncThunk("country/detailCountry", async (data, thunkAPI) => {
    try {
        const response = await axios({
            method: 'GET',
            url: URL + data
        })
        thunkAPI.dispatch(getCurrencies(Object.keys(response.data[0].currencies)))
        thunkAPI.dispatch(getCallingCodes(`${response.data[0].idd.root.split("")[1]}${response.data[0].idd.suffixes[0]}`))
        return response.data[0]
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const getCurrencies = createAsyncThunk("country/getCurrencies", async (data, thunkAPI) => {
    try {
        const response = await axios({
            method: 'GET',
            url: "https://restcountries.com/v3.1/all?fields=currencies,name"
        })
        let filterData = response.data.filter(item => Object.keys(item.currencies)[0] !== undefined)
        let cleanData = filterData.map(item => {
            return {
                currencies: item.currencies,
                name: item.name.common
            }
        })
        let result = cleanData.filter(item => Object.keys(item.currencies)[0] === data[0])
        return result
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const getCallingCodes = createAsyncThunk("country/getCallingCodes", async (data, thunkAPI) => {
    try {
        const response = await axios({
            method: 'GET',
            url: 'https://restcountries.com/v3.1/all?fields=idd,name'
        })

        let cleanData = response.data.map((item) => {
            return {
                callingcode: `${item.idd.root.split("")[1]}${item.idd.suffixes[0]}`,
                name: item.name.common
            }
        })
        let result = cleanData.filter(item => item.callingcode === data)
        return result
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
            state.countryData = {}
            state.altSpellings = []
            state.latlong = []
            state.currencies = []
            state.callingCodes = []
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
        builder.addCase(detailCountry.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(detailCountry.fulfilled, (state, action) => {
            state.isLoading = false
            state.countryData.name = action.payload.name.common
            state.countryData.flagImage = action.payload.flags.png
            state.countryData.flagALT = action.payload.flags.alt
            state.altSpellings = action.payload.altSpellings
            state.countryData.capital = action.payload.capital
            state.countryData.region = action.payload.region
            state.countryData.subregion = action.payload.subregion
            state.countryData.currency = Object.keys(action.payload.currencies)
            state.latlong = action.payload.latlng
            state.countryData.callcode = `${action.payload.idd.root.split("")[1]}${action.payload.idd.suffixes[0]}`
        })
        builder.addCase(detailCountry.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(getCurrencies.fulfilled, (state, action) => {
            state.currencies = action.payload
        })
        builder.addCase(getCallingCodes.fulfilled, (state, action) => {
            state.callingCodes = action.payload
        })
    }
})

export default countrySlice.reducer
export const {
    setinitsuggestion,
    setinitcountry,
} = countrySlice.actions