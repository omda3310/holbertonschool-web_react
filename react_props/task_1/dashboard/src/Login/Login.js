import React from 'react';
import './Login.css';

function Login() {
    return (

        <div className="App-body">
            <p>Login to access the full dashboard</p>
            <label className='lab_email' for='email'>
                Email:
            </label>
            <input type='email' id='email' name='email' />
            <label className='lab_password' for='password'>
                Password:
            </label>
            <input type='password' id='pwd' name='pwd' minLength="8" required />
            <button className='buttonok'>
                OK
            </button>
        </div>
    );
}

export default Login;
