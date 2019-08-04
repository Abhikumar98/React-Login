import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { Redirect } from 'react-router-dom'

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            isChecked: true,
            rememberMe: "Remember Me",
            signUp: false,
            signnedUp: false,
            loggedIn: false
        }
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleSubmitLogin = this.handleSubmitLogin.bind(this);
        this.handleSubmitSignup = this.handleSubmitSignup.bind(this);
    }
    handleSubmitLogin(){
        this.setState({
            loggedIn: true
        });
    }
    handleSubmitSignup(){
        this.setState({
            signnedUp: true
        });
    }
    handleCheckbox(value) {
        this.setState(
            {
                isChecked: value
            },
            // callback is used because the setState function is asyncronous.
            // So the if conditino will be executed when the setState process is complete 
            // hence leading to a correct execution of program
            ()=>{
                if(this.state.isChecked){
                    this.setState({
                        rememberMe: "I'll remember you"
                    });
                }
                else{
                    this.setState({
                        rememberMe: "Remember Me"
                    });
                }
            }
        );
    }
    handleSignUp(){
        this.setState(currentState => ({
            signUp: !currentState.signUp
        }));
    }
    render() {
        if(this.state.loggedIn || this.state.signnedUp){
            return <Redirect to="/user" />
        }
        return (
            <div id="container">
                <div id="box" style={{display: "flex"}}>
                    {
                        this.state.signUp ? 
                        <SignUp   handleSignUp={this.handleSignUp}
                                  handleSubmitSignup={this.handleSubmitSignup} /> : 
                        <Login    handleCheckbox={this.handleCheckbox}
                                  handleSubmitLogin={this.handleSubmitLogin}
                                  handleSignUp={this.handleSignUp} 
                                  buttonContent={this.state.rememberMe} />}
                </div >
            </div>
        )
    }
}