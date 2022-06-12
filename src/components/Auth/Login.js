import React from 'react';
import "./auth.css"
import "../../global.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Authentication/authContext';
import { useDispatch, useSelector } from 'react-redux';
import { loginHandler } from '../../pages/Slices/AuthSlice';


const Login = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const navigate = useNavigate()
    return (
        <div className='flex-rowns'>
            <div>
                <img className='img' src='/asset/Mobile login-bro.svg' />
            </div>
            <div>
                <div className="loginForm">
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
                            <Link to="/Video">
                            <button onClick={()=>{
                                dispatch(loginHandler())
                                navigate(location.state.from.pathname)
                                }} className="btnL">Login</button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/Video">
                                <button className="btnL"
                                    onClick={() => {
                                       
                                        dispatch(loginHandler())
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
                </div>
            </div>
        </div>
    );
};

export default Login;