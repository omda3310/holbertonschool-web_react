import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
    return (

        <div className={css(stl.Appbody)}>
            <p>Login to access the full dashboard</p>
            <label className='lab_email' htmlFor='email'>
                Email:
            </label>
            <input type='email' id='email' name='email' className={css(stl.input)} />
            <label className='lab_password' htmlFor='pwd'>
                Password:
            </label>
            <input type='password' id='pwd' name='pwd' minLength="8" required className={css(stl.input)} />
            <button>OK</button>
        </div>
    );
}

const stl = StyleSheet.create({
    Appbody: {
		padding: "25px",
	},
    input: {
        paddingleft: "10px",
        marginright: "10px",
    }
});

export default Login;
