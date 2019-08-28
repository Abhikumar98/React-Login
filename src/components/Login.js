import React from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import loginImage from './../images/login.jpg';

export const Login = ({ state, toggleCheck, signup, login }) => {
    const button = state.isChecked ? "I'll remember you" : "Remember Me";
    let username = null;
    let password = null;
    let formRef = null;

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username.value, password.value);
        formRef.reset();
    }

    return(
        <form onSubmit={handleSubmit} ref={input => {formRef = input;}} id="login">
            <img src={loginImage} alt="Login"/>
            <div className="input-container">
                <h1 style={{ textAlign: "center", width: "70%" }}>Login</h1>
                <div className="field">
                    <input type="text" name="username" 
                           ref={input => {username = input;}}
                           id="username" placeholder="&nbsp;" required />
                    <label for="username">Username</label>
                </div>
                <div className="field">
                    <input type="password" name="password" 
                           ref={input => {password = input;}} 
                           id="password" placeholder="&nbsp;" required />
                    <label for="password">Password</label>
                </div>
                <div style={{
                    display: "flex",
                    width: "70%",
                    alignItems: "center",
                    flexDirection: "column"
                }}>
                    <div className="bottom-button">
                        <FormGroup check inline>
                                <input className="checkinput" id="rememberMe" 
                                       defaultChecked={state.isChecked}
                                       onChange={() => toggleCheck()}
                                       type="checkbox" name="rememberMe"></input>
                                <label className="check" for="rememberMe">{button}</label>
                        </FormGroup>
                        <Button type="button" color="link">Forgot password</Button>
                    </div>
                    <div className="login-bottom-button" 
                         style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                        <Button color="primary">Login</Button>
                        <Button outline type="button" onClick={() => signup()} color="primary">Sign Up</Button>
                    </div>
                </div>
            </div>
        </form>
    )
}