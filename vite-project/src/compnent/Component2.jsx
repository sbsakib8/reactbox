import React, { useContext } from 'react'
import { Usecontexts } from './Usecontext'

function Component2() {
    const {user,text}  = useContext(Usecontexts)
  return (
    <div>Component2
        <h1>{text}</h1>
        <h1>{user}</h1>

    </div>
  )
}

export default Component2