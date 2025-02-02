import { createSlice } from "@reduxjs/toolkit";

export const todoSlice  = createSlice(
    {
        name:'todo',
        initialState:{
            todos:0,
        },
        reducers:{
            increment:(state)=>({...state,todos:state.todos+1}),
            decrement:(state)=>({...state,todos:state.todos-1}),
            reset:(state)=>({...state,todos:0}),
        }
    }
)

export const {increment,decrement,reset} = todoSlice.actions

export default todoSlice.reducer;