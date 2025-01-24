import React, { useContext, useState } from 'react'
import { Usecontexts } from './Usecontext'

function Componet4() {
  const {user,setuser}= useContext(Usecontexts)
   const [data ,setdata] = useState('')
   const handeladd = (e) => {
     setdata(e.target.value)
   }
   const handelsub = (e) => {
     e.preventDefault()
    let namesd= setuser([...user,{id:Math.random(),name:data,work:'worker'}])
     setdata('')
   }
  return (
    <div>
     
        <form onSubmit={handelsub}>
          <label for="fname"> Name:</label><br />
          <input className=' focus:outline-none active:outline-none p-1 border border-red-500 rounded-xl' type="text" id="fname" name="fname" required value={data}  onChange={handeladd} /><br />
          <label for="lname"> Work:</label><br />
          <input className=' bg-green-500 p-2 rounded-full w-24 shadow-xl hover:bg-red-200 hover:shadow-2xl mt-3 ' type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Componet4