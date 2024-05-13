import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../images/logo.jpg";
import "./Login.css";

const clientId = '879595363712-teulgvpe0j6kq942v3u907ojsk0ke8me.apps.googleusercontent.com';

function Login ()  {
    const navigate = useNavigate();
    const onSuccess = (res) => {
        localStorage.setItem('user', JSON.stringify(res.profileObj));
        navigate("/home");
        console.log("Login Successs! Current user: ", res.profileObj);
    }
    const onFailure = (res) => {
        console.log("Login Failed! res: ", res);
    }
return (
    <div>
         <nav className='navbar' id = "navbar">
                
               
          <div>
          <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex '>
            <img src = {logoImg} alt = "site logo" style={{ maxWidth: '10%', maxHeight: '5%'}}/>
            <span style={{fontSize: '4rem', fontWeight: 'bold', paddingLeft: '-20px'}}>SWAPIT</span>
            </div></div>
                </div>
            </nav>
            <div >
                <div style= {{ marginLeft: '40%', marginTop: '10%'}}> Login using your Google Account</div>
            <div id="signInButton" style= {{ marginLeft: '45%'}}>
                    <GoogleLogin
                    clientId={clientId}
                    buttonText='Login'
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    />
                </div>
                </div>
    </div>
)
}
  
  export default Login;
