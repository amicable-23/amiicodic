import React from 'react'
import "./signup.css"
import { Link } from 'react-router-dom'


function Singup() {
  return (
    <div className='signup-container'>
    <h1>Sign Up</h1>
    <form className='signup-form '>
      <h6>SIGN UP</h6>
       
        <label htmlFor="email">Email</label>
        <input type="email"  placeholder='enter your email'required/>
        <label htmlFor="password">Password</label>
        <input type="password" placeholder='password'required/>
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input type="password" placeholder='confirm password'required/>
        <label htmlFor="confirmpassword">Contact</label>
        <input type="text" placeholder='enter phone number'required/>
       
        <button className='sign btn w-100 btn-outline-primary' type='submit btn'>Sign Up</button>
        <h5>Have an account?</h5>
      
       <Link  to="/login"><button type='btn' className='signs btn btn-outline-danger' >click to login</button></Link>
       
      
        
    </form>

</div>
  )
}

export default Singup