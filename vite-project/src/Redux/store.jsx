import {configureStore } from '@reduxjs/toolkit'
import  counterReduser  from './countSlice';
import  todoReduser  from './todoSlice';
const store = configureStore({
    reducer: {
        counter: counterReduser,
        todo: todoReduser,

    },
})

export default store;