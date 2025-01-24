import React, { useContext } from 'react'
import { Usecontexts } from './Usecontext'
import Componet4 from './componet4'

function Component2() {
    const {user,text ,setuser}  = useContext(Usecontexts)
    const deletes = (id) => {
     let userd = user.filter((use)=>{
       return use.id!== id
     })
     setuser(userd)
    }
  return (
    <div className='flex gap-5 flex-1 flex-wrap'>Component2
        <h1>{text}</h1>
        <Componet4/>
        {
          user.map((itme)=>{
            return(
              <div className=' w-40 h-34 bg-green-400 px-10 py-1 shadow-lg' key={itme.id}>
                <p>{itme.id}</p>
                <h2>{itme.name}</h2>
                <h2>{itme.work}</h2>
                <button  className=' bg-red-500 p-2 rounded-full w-14 shadow-xl hover:bg-red-900 hover:shadow-2xl ' onClick={() =>{deletes(itme.id)}} >delet</button>
              </div>
            )
          })
        }

    </div>
  )
}

export default Component2