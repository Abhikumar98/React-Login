import React from 'react';
import LoginContainer from './../containers/LoginContainer';
import SignUpContainer from './../containers/SignUpContainer';

export const App = ({ state }) => {
    
    return(
        <div id="container">
            <div id="box" style={{ display: "flex" }}>
                {
                    state.signUp ?
                        <SignUpContainer /> : <LoginContainer />
                }
            </div >
        </div>
    )
}