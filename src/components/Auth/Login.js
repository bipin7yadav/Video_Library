import React, { useEffect, useState } from 'react';
import "./auth.css"
import "../../global.css"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LoginValidation } from '../../utils/validationChecker';
import { loginHandler } from '../../pages/Slices/AuthSlice';


const Login = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const navigate = useNavigate()

    const [loginDetail, setLoginDetail] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState({ isError: true })
    const { status, user } = useSelector(store => store.login)

    useEffect(() => {
        if (!error.isError) {
            dispatch(loginHandler(loginDetail))
        }
    }, [error])

    let path = "/login"

    if (location.state !== null) {
        path = location.state.from.pathname
    }

    useEffect(() => {
        if (user) {
            navigate(path)
        }
    }, [user, status])

    const inputHandler = (e) => {
        const { name, value } = e;
        setLoginDetail({ ...loginDetail, [name]: value })
    }

    const login = () => {
        console.log("logi handler");
        const error = LoginValidation(loginDetail);
        setError(error)
    }
    return (
        <div className='flex-rowns'>
            <div>
                <img className='img' src='/asset/Mobile login-bro.svg' />
            </div>
            <div className='centre'>
                <div className="loginForm">
                    <div className="lContent" >
                        <div>
                            <h2>Login</h2>
                        </div>
                        <div className="inp<">
                            <label>Email*</label>
                            <input
                                type="email"
                                className="inputs"
                                onChange={(e) => inputHandler(e.target)}
                                value={loginDetail.email}
                                name="email"
                                required
                                placeholder='adarshbalika@gmail.com'
                            />
                        </div>
                        {error.email && <div>{error.email}</div>}
                        <div className="inp">
                            <label>Password*</label>
                            <input
                                type="password"
                                className="inputs"
                                onChange={(e) => inputHandler(e.target)}
                                value={loginDetail.password}
                                name="password"
                                required
                                placeholder='*******'

                            />
                        </div>
                        {error.password && <div>{error.password}</div>}
                        <div>
                            <button onClick={() => {
                                login()
                            }} className="btnL">Login</button>
                        </div>
                        <div>
                            
                            <button className="btnL"
                                onClick={() => {
                                    setError({ isError: false })
                                    setLoginDetail({
                                        email: "adarshbalika@gmail.com",
                                        password: "adarsh12"
                                    })
                                    localStorage.setItem("email","adarshbalika@gmail.com")
                                }}
                            >
                                Login as Guest
                            </button>
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