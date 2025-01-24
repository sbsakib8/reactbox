import React, { useState } from 'react'
import { Usecontexts } from './Usecontext'
import Component1 from './Component1'
function Component() {
  const [text, settext] = useState('sb sakib sarkar')
  const [user, setuser] = useState(
    [
      {
        id :1,
        name: 'sb sakib',
        work: 'programmer'
      },
        {
        id :2,
        name: 'sb rakib',
        work: 'reporter'
      },
        {
        id :3,
        name: 'sb sabbir', 
        work: 'worker'
      },
    ]
)
  return (
    <Usecontexts.Provider value={{ text, user, setuser }}>Component
      <Component1 />
      heloo
    </Usecontexts.Provider>
  )
}

export default Component