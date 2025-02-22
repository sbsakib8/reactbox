import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
function Singin() {
   
    const formik = useFormik({
        initialValues: {
          firstName: '',
          email: '',
          passwoard: '',
          
        },
        validationSchema: yup.object({
          firstName: yup.string().required().min(5, "name must be at least 5 characters long").max(10, "name must be at most 10 characters long"),
          email: yup.string().email().required(),
          passwoard: yup.string().required().min(8, "password must be at least 8 characters long"),
        }),
        onSubmit: (values , {resetForm}) => {
          
       console.log(values);
        resetForm({values:''})
         
        },
      });
      
  return (
    <div className=' flex justify-center items-center flex-col gap-4'>
       <h1> Singin</h1>
       <div>
         <form  onSubmit={formik.handleSubmit}>
             <input type="text" id='firstName' name='firstName' onChange={formik.handleChange} value={formik.values.firstName} placeholder='name' />
             {formik.errors.firstName && formik.touched.firstName ? <p className=' text-red-600'>{formik.errors.firstName}</p> : null}
             <br />
             <input type="email" id='email' name='email' onChange={formik.handleChange} value={formik.values.email} placeholder='email' />

             {formik.errors.email && formik.touched.email ? <p className=' text-red-600'>{formik.errors.email}</p> : null}
             <br />
             <input  type="password"  id='passwoard' name='passwoard' onChange={formik.handleChange} value={formik.values.passwoard} placeholder='password' />
              

             {formik.errors.passwoard && formik.touched.passwoard ? <p className=' text-red-600'>{formik.errors.passwoard}</p> : null}
             <br />

             <button type='submit'>Singin</button>
         </form>
       </div>
       
    </div>
  )
}

export default Singin