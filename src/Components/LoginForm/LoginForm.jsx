import React from 'react';
import './LoginForm.css';

export const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action=''>
            <h1>Login</h1>
            <div className='input-box'>
                <input type='text' placeholder='Username' required/>
            </div>
            <div className='input-box'>
                <input type='password' placeholder='Password' required/>
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>
                <a href='a'>forgot password?</a>
            </div>

            <button type='submit'>Login</button>
            <div className='Register-Link'>
                <p>Don't have an account?<a href='#'>Register</a></p>
            </div>
        </form>
    </div>
  );
};

export default LoginForm;
