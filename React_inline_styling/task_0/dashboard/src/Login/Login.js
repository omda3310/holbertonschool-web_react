import React from 'react';
import './Login.css';

function Login() {
    return (

        <div className="Appbody">
            <p>Login to access the full dashboard</p>
            <label className='lab_email' htmlFor='email'>
                Email:
            </label>
            <input type='email' id='email' name='email' />
            <label className='lab_password' htmlFor='pwd'>
                Password:
            </label>
            <input type='password' id='pwd' name='pwd' minLength="8" required />
            <button>OK</button>
        </div>
    );
}

export default Login;
