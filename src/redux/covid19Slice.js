import { createSlice } from '@reduxjs/toolkit';

const initalState = {
    value: 0,
}

export const covid19Slice = createSlice({
    name: 'covid19',
    initalState,
    reducers: {}
})

// export const { } = covid19Slice.actions;
export default covid19Slice.reducer;