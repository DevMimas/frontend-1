import React, { Component } from 'react';
import axios from 'axios';
import './Login.scss';
import EyeOffIcon from '../icons/eye-off.icon';
import EyeIcon from '../icons/eye.icon';

class Login extends Component {

    state = { 
        email: '',
        password: '',
        passwordHidden: true
    };

    togglePasswordHide() {
        this.state.passwordHidden = !this.state.passwordHidden;
        this.setState(this.state);
    }

    emailChangeListener = (event) => {
        this.state.email = event.target.value;
    };

    passwordChangeListener = (event) => {
        this.state.password = event.target.value;
    };

    handleSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <div className="login-component">
                <h1 className="login-title">L O G I N</h1>
                {/* describes the email-input-box */}
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Enter Email..."
                        className="input-field"
                        onChange={this.emailChangeListener}
                    />
                </div>
                {/* describes the password-input-box */}
                <div className="input-box">
                    <input
                        type="password"
                        placeholder="Enter password..."
                        className="input-field passwort"
                        onChange={this.passwordChangeListener}
                    />
                    {/* describes the two eye-icons in the field */}
                    <div className="showPasswordButton clickable" onClick={this.togglePasswordHide}>
                    {
                        this.state.passwordHidden ?
                        <EyeOffIcon/> : <EyeIcon/>
                    }
                    </div>
                </div>
                {/* describes the google-login-field */}
                <button className="clickable google-login">
                    <img
                        className="google-pic"

                        src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                    />
                    Log In with Google
                </button>
                <button className="clickable" onClick={this.handleSubmit}>Login</button>
            </div>
        );
    }
}

export default Login;
