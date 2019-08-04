import React from 'react';
import userImage from './../images/user.jpg'

const User = () =>{
    return(
        <div style={{display:"flex", 
                        flexDirection: "column",
                        textAlign: "center",
                        height:"100vh",
                        overflow:"hidden"}}>
            <h1>User Logged In</h1>
            <img src={userImage} alt="user"/>
        </div>
    )
}
export default User