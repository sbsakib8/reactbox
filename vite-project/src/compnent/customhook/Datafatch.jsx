import React from 'react'
import usecostom from './usecostom'


function Datafatch() {
    const{datas,error,loding}=usecostom("https://jsonplaceholder.typicode.com/todos")
  return (
    <div>Datafatch
    
        <div>
        {loding && <h1>loding .. plz wait for a minit</h1>}
        {error && <h1>api not loding</h1>}
        {
            datas && datas.map((itme)=>{
                return <h2 key={itme.id}>{itme.title}</h2>
            })
        }
        </div>

    </div>
  )
}

export default Datafatch