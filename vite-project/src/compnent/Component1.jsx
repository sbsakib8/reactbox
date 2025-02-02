import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from '../Redux/countSlice'

function Component1() {
  const count = useSelector((select)=> select.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>count : {count}</h1>
      <button className=' bg-green-400 p-3 rounded-2xl mr-5 hover:bg-green-200' 
      onClick={
        ()=>{
          dispatch(increment())
        }
      }
      >increment</button>
      <button className=' bg-green-400 p-3 rounded-2xl mr-5 hover:bg-green-200' 
      onClick={
        ()=>{
          dispatch(decrement())
        }
      }
      >decrement</button>
    
    </div>
  )
}

export default Component1