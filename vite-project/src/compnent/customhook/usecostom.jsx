import React,{ useEffect, useState }  from 'react'

function usecostom(url) {
    const [datas, setdatas]=useState(null)
    const [error, seterror]=useState(null)
    const [loding, setloding]=useState(true)
useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw Error('api not loding')
            }
            return res.json()
        })
        .then((data)=>{
            setdatas(data)
            setloding(false)
        })
        .catch((error)=>{
            seterror(error)
            setloding(false)
        })
        },4000)
    },[url])
  return {datas,error,loding}
}

export default usecostom