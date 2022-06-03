import React from 'react';
import { useState } from 'react';
import "./auth.css"
import "../../global.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Authentication/authContext';

const Login = () => {
    const {login,setLogin}=useAuth();
    const location=useLocation();
    const navigate =useNavigate()
    return (
        <div className='flex-rowns'>
            <div>
                <img className='img' src='/asset/Mobile login-bro.svg' />
            </div>
            <div>
                <form className="loginForm" >
                    <div className="lContent" >
                        <div>
                            <h2>Login</h2>
                        </div>
                        <div className="inp">
                            <label>Email*</label>
                            <input type="email" className="inputs" />
                        </div>
                        <div className="inp">
                            <label>Password*</label>
                            <input type="password" className="inputs" />
                        </div>
                        <div>
                            <button className="btnL">Login</button>
                        </div>
                        <div>
                            <Link to="/">
                                <button className="btnL"
                                onClick={()=>{
                                    setLogin(!login)
                                    navigate(location.state.from.pathname)
                                }}
                                >
                                    Login as Guest
                                </button>
                            </Link>
                        </div>
                        <div>
                            <p>Don't have an account <Link to="/signUp">Create One</Link> </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;