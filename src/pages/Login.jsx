import React from 'react'
import { Button } from 'react-native-web'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type='text' placeholder='username'/>
        <input type='password' placeholder='password'/>
        <button>Login</button>
      </form>
      </div>
  )
}


 
export default Login