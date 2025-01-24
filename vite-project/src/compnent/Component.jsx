import React, { useState } from 'react'
import { Usecontexts } from './Usecontext'
import Component1 from './Component1'
function Component() {
    const [text , settext]= useState('sb sakib sarkar')
    const [user , setuser]= useState(' sarkar')
  return (
    <Usecontexts.Provider value={{text , user}}>Component
<Component1/>
        heloo
    </Usecontexts.Provider>
  )
}

export default Component