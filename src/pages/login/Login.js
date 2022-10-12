import React from 'react'
import './login.css'

function Login() {
  return (
    <div className='container'>
        <div className='form-box'>
          <span className='animate__rubberBand' id="Logo-text">Chat App</span> 
          <span className='Login-text'>Login</span>
          <form>
          <input type="email" placeholder='Enter Email' />
          <input type="password" placeholder='Enter Password' />
          <button className="btn">Login</button>
          </form>

        </div>
    </div>
  )
}

export default Login