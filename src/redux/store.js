import { configureStore } from '@reduxjs/toolkit';
import covid19Slice from './covid19Slice';


export const store = configureStore({
    reducer: {
        covid19: covid19Slice,
    },
})