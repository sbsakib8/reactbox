import React, { useState } from 'react'
import User from './user'
import PropTypes from 'prop-types'
function Users() {
    const num = 1233
    const name= 'sakib'
    const [fullname , setFullname] = useState('skaib sarkar')
  return (
    <div>
     <User fullname={fullname} num={num} name={name}/>
    </div>
  )
  Users.PropTypes ={
    num: PropTypes.string,
    name: PropTypes.string,
    fullname: PropTypes.string
  }
}

export default Users