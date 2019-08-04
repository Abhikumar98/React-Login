import React, { Component } from 'react';
import { Button } from 'reactstrap';
import signUpImage from './../images/signup1.jpg';


export default class SignUp extends Component {
    constructor(props) {
        super();
        this.handleSignUpForm = this.handleSignUpForm.bind(this);
    }
    handleSignUpForm(e) {
        e.preventDefault();
        this.props.handleSubmitSignup();
        this.formRef.reset();
    }
    render() {
        return (
            <form onSubmit={this.handleSignUpForm} ref={input => this.formRef = input} id="signup">
                <img src={signUpImage} alt="SignUp" />
                <div className="input-container">
                    <h1 style={{ textAlign: "center", width: "70%" }}>Sign Up</h1>
                    <div className="field">
                        <input type="text" name="username_signup" id="username_signup" placeholder="&nbsp;" required />
                        <label for="username_signup">Username</label>
                    </div>
                    <div className="field">
                        <input type="password" name="password_signup" id="password_signup" placeholder="&nbsp;" required />
                        <label for="password_signup">Password</label>
                    </div>
                    <div className="field">
                        <input type="password" name="confirm_password_signup" id="confirm_password_signup" placeholder="&nbsp;" required />
                        <label for="confirm_password_signup">Confirm Password</label>
                    </div>
                    <div className="field">
                        <input type="email" name="email" id="email" placeholder="&nbsp;" />
                        <label for="email">Email</label>
                    </div>
                        <div id="sign-button-bottom">
                            <Button color="primary">Sign Up</Button>
                            <Button outline color="primary" type="submit" onClick={this.props.handleSignUp}>Log In</Button>
                        </div>
                </div>
            </form>
        )
    }
}