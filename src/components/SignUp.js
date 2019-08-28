import React from 'react';
import { Button } from 'reactstrap';
import signUpImage from './../images/signup1.jpg';

export const SignUp = ({ signup, userSignup }) => {
    let username = null;
    let password = null;
    let confPassword = null;
    let email = null;
    let formRef = null;


    const handleSubmit = (e) => {
        e.preventDefault();
        if(confPassword.value === password.value){
            userSignup(username.value, password.value, email.value)
            formRef.reset();
        }
        else{
            alert("the passwords doesn't match !!!")
        }
    }

    return (
        <form id="signup" onSubmit={handleSubmit} ref={input => {formRef = input;}}>
            <img src={signUpImage} alt="SignUp" />
            <div className="input-container">
                <h1 style={{ textAlign: "center", width: "70%" }}>Sign Up</h1>
                <div className="field">
                    <input type="text" ref={input => { username = input; }} name="username_signup" id="username_signup" placeholder="&nbsp;" required />
                    <label for="username_signup">Username</label>
                </div>
                <div className="field">
                    <input type="password" ref={input => { password = input; }} name="password_signup" id="password_signup" placeholder="&nbsp;" required />
                    <label for="password_signup">Password</label>
                </div>
                <div className="field">
                    <input type="password" ref={input => { confPassword = input; }} name="confirm_password_signup" id="confirm_password_signup" placeholder="&nbsp;" required />
                    <label for="confirm_password_signup">Confirm Password</label>
                </div>
                <div className="field">
                    <input type="email" ref={input => { email = input; }} name="email" id="email" placeholder="&nbsp;" />
                    <label for="email">Email</label>
                </div>
                <div id="sign-button-bottom">
                    <Button color="primary">Sign Up</Button>
                    <Button outline color="primary" type="submit" onClick={() => signup()}>Log In</Button>
                </div>
            </div>
        </form>
    )
}