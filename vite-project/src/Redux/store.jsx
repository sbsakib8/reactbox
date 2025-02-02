import {configureStore } from '@reduxjs/toolkit'
import  counterReduser  from './countSlice';
const store = configureStore({
    reducer: {
        counter: counterReduser,
    },
})

export default store;