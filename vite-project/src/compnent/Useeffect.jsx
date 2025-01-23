import React, { useEffect, useState } from 'react'

function Useeffect() {
    const [todo , settodo] = useState(null)
    const [error ,seterror] = useState(null)
    const [loding , setloding] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            if(!res.ok){
                throw Error('api not loding')
            }
            return res.json()
        })
        .then((data)=>{
            settodo(data)
            setloding(false)
        })
        .catch((error)=>{
            seterror(error)
            setloding(false)
        })
        },4000)
    },[])
  return (
    <div>
        {loding && <h1>loding .. plz wait for a minit</h1>}
        {error && <h1>api not loding</h1>}
        {
            todo && todo.map((itme)=>{
                return <h2 key={itme.id}>{itme.title}</h2>
            })
        }

    </div>
  )
}

export default Useeffect