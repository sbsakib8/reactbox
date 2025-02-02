import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../Redux/todoSlice'

function Component2() {
  const todos= useSelector((stat)=>stat.todo.todos)
    const dispatch = useDispatch()
  return (
    <div>
      <h1>
        count todo : {todos}
      </h1>
      <button className=' bg-green-400 p-3 rounded-2xl mr-5 hover:bg-green-200'
      onClick={()=>{
        dispatch(increment())
      }}
      >todo</button>
    </div>
  )
}

export default Component2