import React from 'react'
import "./login.css"
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div  className='login-container'>
      <form className='login form-control'>
        <h6>LOGIN</h6>
        <label htmlFor="email" id='email' className='form-label'>Email</label>
        <input className='form-control' type="email" placeholder='enter email' required /><br />

        <label htmlFor="password" id='Password' className='form-label'>Password</label>
        <input type="password" className='form-control' placeholder='enter password'/><br />

         <div className='Login'>
        <button type='btn' className='btn w-100 btn-outline-danger login'>Login</button>
        <h5>Click here to sign up</h5>
       <Link  to="/signup"><button type='btn' className='logins btn btn-outline-primary'>Sign up</button></Link>
       </div>
       
      

        
        
      </form>
    </div>
  )
}

export default Login