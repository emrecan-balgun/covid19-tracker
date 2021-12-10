import { createSlice } from '@reduxjs/toolkit'

export const covidSlice = createSlice({
  name: 'covid',
  initialState: {
    country: '',
    currentConfirmed: 0,
    currentRecovered: 0,
    currentDeaths: 0,
  },
  reducers: {
      changeCountry: (state, action) => {
          state.value = action.payload;
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
  }
})

export const { changeCountry, changeConfirmed, changeRecovered, changeDeaths } = covidSlice.actions;

export const country = (state) => state.covid.country;
export const currentConfirmed = (state) => state.covid.currentConfirmed;
export const currentRecovered = (state) => state.covid.currentRecovered;
export const currentDeaths = (state) => state.covid.currentDeaths;

export default covidSlice.reducer