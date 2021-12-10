import { createSlice } from '@reduxjs/toolkit'

export const covidSlice = createSlice({
  name: 'covid',
  initialState: {
    country: 'global',

    globalConfirmed: 0,
    globalRecovered: 0,
    globalDeaths: 0,
    globalLastUpdate: '',

    currentConfirmed: 0,
    currentRecovered: 0,
    currentDeaths: 0,
    currentLastUpdate: '',
  },
  reducers: {
      changeCountry: (state, action) => {
          state.value = action.payload;
      },
      changeGlobalConfirmed: (state, action) => {
         state.globalConfirmed = action.payload;
      },
      changeGlobalRecovered: (state, action) => {
          state.globalRecovered = action.payload;
      },
      changeGlobalDeaths: (state, action) => {
          state.globalDeaths = action.payload;
      },
      changeGlobalLastUpdate: (state, action) => {
          state.globalLastUpdate = action.payload;
      },
      changeConfirmed: (state, action) => {
          state.currentConfirmed = action.payload;
      },
      changeRecovered: (state, action) => {
          state.currentRecovered = action.payload;
      },
      changeDeaths: (state, action) => {
          state.currentDeaths = action.payload;
      },
      changeLastUpdate: (state, action) => {
          state.currentLastUpdate = action.payload;
      }
  }
})

export const { 
    changeCountry, 
    changeGlobalConfirmed, 
    changeGlobalRecovered, 
    changeGlobalDeaths, 
    changeGlobalLastUpdate, 
    changeConfirmed, 
    changeRecovered, 
    changeDeaths, 
    changeLastUpdate 
} = covidSlice.actions;

export const country = (state) => state.covid.country;

export const globalConfirmed = (state) => state.covid.globalConfirmed;
export const globalRecovered = (state) => state.covid.globalRecovered;
export const globalDeaths = (state) => state.covid.globalDeaths;
export const globalLastUpdate = (state) => state.covid.globalLastUpdate;

export const currentConfirmed = (state) => state.covid.currentConfirmed;
export const currentRecovered = (state) => state.covid.currentRecovered;
export const currentDeaths = (state) => state.covid.currentDeaths;
export const currentLastUpdate = (state) => state.covid.currentLastUpdate;

export default covidSlice.reducer