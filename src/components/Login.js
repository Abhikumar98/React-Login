import React, { Component } from 'react'
import { Button, FormGroup, Input, Label } from 'reactstrap';
import loginImage from './../images/login.jpg';


export default class Login extends Component {
    constructor(props){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleForgotPassword = this.handleForgotPassword.bind(this);
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    }
    handleForgotPassword(){

    }
    handleChangeCheckbox(e){
        this.props.handleCheckbox(e.target.checked);
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({
            redirectToUser: true
        })
        this.props.handleSubmitLogin();
        this.formRef.reset();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} ref={input => this.formRef = input} id="login">
                <img src={loginImage} alt="Login"/>
                <div className="input-container">
                    <h1 style={{ textAlign: "center", width: "70%" }}>Login</h1>
                    <div className="field">
                        <input type="text" name="username" id="username" placeholder="&nbsp;" required />
                        <label for="username">Username</label>
                    </div>
                    <div className="field">
                        <input type="password" name="password" id="password" placeholder="&nbsp;" required />
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
                                <Label check>
                                    <Input type="checkbox" 
                                           ref={input => this.checkbox = input} 
                                           defaultChecked={this.props.isChecked} 
                                           onChange={this.handleChangeCheckbox} />
                                    
                                    {this.props.buttonContent}
                                </Label>
                            </FormGroup>
                            <Button type="button"  color="link">Forgot password</Button>
                        </div>
                        <div className="login-bottom-button" style={{ width: "100%",display: "flex",justifyContent: "space-around" }}>
                            <Button color="primary">Login</Button>
                            <Button outline type="button" onClick={this.props.handleSignUp} color="primary">Sign Up</Button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
