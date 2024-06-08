import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: props.email || "",
            password: props.password || "",
            enableSubmit: false,
        };
        this.logIn = this.props.logIn;
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleLoginSubmit() {
        this.logIn(this.state.email, this.state.password);
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value});
        if (this.state.email && this.state.password) {
            this.setState({ enableSubmit: true});
        }
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value});
        if (this.state.email && this.state.password) {
            this.setState({ enableSubmit: true});
        }
    }

    render() {
        return (

            <div className={css(stl.Appbody)}>
                <p>Login to access the full dashboard</p>
                <form action='' onSubmit={this.handleLoginSubmit}>
                    <label className='lab_email' htmlFor='email'>
                        Email:
                    </label>
                    <input type='email' id='email' name='email' className={css(stl.input)}
                    value={this.state.email}
                    onChange={this.handleChangeEmail}
                     />
                    <label className='lab_password' htmlFor='pwd'>
                        Password:
                    </label>
                    <input type='password' id='password' name='password' minLength="8" required className={css(stl.input)}
                    value={this.state.password}
                    onChange={this.handleChangePassword}
                     />
                    <input type='submit' disabled={!this.state.enableSubmit} value="OK" />
                </form>
            </div>
        );
    }
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
