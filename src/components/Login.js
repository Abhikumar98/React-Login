import React, { Component } from 'react'
import { Button, FormGroup, Input, Label } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import loginImage from './../images/login.jpg';


export default class Login extends Component {
    constructor(props){
        super();
        this.state={
            redirectToUser: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleForgotPassword = this.handleForgotPassword.bind(this);
    }
    handleForgotPassword(){

    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({
            redirectToUser: true
        })
        this.props.handleSubmit();
        this.formRef.reset();
    }
    render() {
        const redirectToUser = this.state.redirectToUser;
        if (redirectToUser === true) {
            return <Redirect to="/user"/>
        }
        return (
            <form onSubmit={this.handleSubmit} ref={input => this.formRef = input} id="login">
                <img src={loginImage} alt="Login Image"/>
                <div className="input-container">
                    <h1 style={{ textAlign: "center", width: "70%" }}>Login</h1>
                    <div className="field">
                        <input type="text" name="username_login" id="username_login" placeholder="&nbsp;" required/>
                        <label for="username_login">Username</label>
                    </div>
                    <div className="field">
                        <input type="password" name="password" id="password" placeholder="&nbsp;" required/>
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
                                    <Input type="checkbox" onChange={this.props.handleCheckbox} />{this.props.buttonContent}
                                </Label>
                            </FormGroup>
                            <Button type="button"  color="link">Forgot password</Button>
                        </div>
                        <div className="login-bottom-button" style={{ width: "100%",display: "flex",justifyContent: "space-around" }}>
                            <Link to="/user">
                                <Button type="submit" onClick={this.props.handleSubmit} color="primary">Login</Button>
                            </Link>
                            <Button outline type="button" onClick={this.props.handleSignUp} color="primary">Sign Up</Button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
