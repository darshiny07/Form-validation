import React from 'react'
import './App.css';
import {useFormik} from 'react';

const initialValues ={
  name: '',
  email: '',
  password: '',
  cpassword:''
}

// console.log(formik);
const App = () => {
  const formik =useFormik({
    initialValues,
    onsubmit:(values)=>{
      console.log(values);
    }
  })
  return (
    <div className='app'>
      <form className='signup_form'>
        <label htmlFor="name">Name</label>
        <input type="text" name='name'/>

        <label htmlFor="email">Email</label>
        <input type="email" name='email'/>

        <label htmlFor="password">Password</label>
        <input type="password" name='password'/>

        <label htmlFor="cpassword">Confirm Password</label>
        <input type="cpassword" name='cpassword'/>

        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default App