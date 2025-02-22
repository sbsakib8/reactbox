

import React from 'react'
import PropTypes from 'prop-types'
console.log(PropTypes);

function User({ num, name, fullname }) {
    
    
  return (
    <div>
     <h1>my name is {fullname}</h1>
     <h2> numder {num}</h2>
     <h2>{name}</h2>
    </div>
  )
 User.PropTypes = {
    num: PropTypes.string,
    name: PropTypes.string,
    fullname: PropTypes.string
 }
}

export default User