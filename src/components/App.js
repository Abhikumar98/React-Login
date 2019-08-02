import React, { Component } from 'react';
import Login from './Login';
import SignUp from './SignUp';

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            isChecked: true,
            rememberMe: "Remember Me",
            signUp: false,
        }
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }
    handleCheckbox() {
        console.log("working");
        
        this.setState(currentState => ({
            isChecked: !currentState.isChecked
        }));
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
    handleSignUp(){
        this.setState(currentState => ({
            signUp: !currentState.signUp
        }));
    }
    render() {
        return (
            <div id="container">
                <div id="box" style={{display: "flex"}}>
                    {
                        this.state.signUp ? 
                        <SignUp   handleSignUp={this.handleSignUp} /> : 
                        <Login    handleCheckbox={this.handleCheckbox}
                                  handleSignUp={this.handleSignUp} 
                                  buttonContent={this.state.rememberMe} />}
                </div >
            </div>
        )
    }
}
