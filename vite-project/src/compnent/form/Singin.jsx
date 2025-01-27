import React, { useState } from 'react'
import { useFormik } from 'formik';
function Singin() {
    const [data , setdata]= useState()
    const formik = useFormik({
        initialValues: {
          firstName: '',
          passwoard: '',
          
        },
        onSubmit: (values , {resetform}) => {
          
       console.log(values);
         resetform(values)
         
        },
      });
      
  return (
    <div className=' flex justify-center items-center flex-col gap-4'>
       <h1> Singin</h1>
       <div>
         <form  onSubmit={formik.handleSubmit}>
             <input type="text" id='firstName' name='firstName' onChange={formik.handleChange} value={formik.values.firstName} placeholder='name' />
             <input  type="password"  id='passwoard' name='passwoard' onChange={formik.handleChange} value={formik.values.passwoard} placeholder='password' />
             <button type='submit'>Singin</button>
         </form>
       </div>
       
    </div>
  )
}

export default Singin