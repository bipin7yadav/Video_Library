import React from 'react';
import { Link } from 'react-router-dom';
import "../../global.css"
import "./auth.css"

const SignUP = () => {
    return (
        <div className='flex-rowns'>
            <div>
                <img className='img' src='/asset/Mobile login-bro.svg' />
            </div>
            <div>
                <form className="loginForm" >
                    <div className="scontent" >
                        <div>
                            <h2>SignUp</h2>
                        </div>
                        <div className="inp">
                            <label>First Name*</label>
                            <input type="text" className="inputs" />
                        </div>
                        <div className="inp">
                            <label>Last Name*</label>
                            <input type="text" className="inputs" />
                        </div>
                        <div className="inp">
                            <label>Password*</label>
                            <input type="password" className="inputs" />
                        </div>
                        <div className="inp">
                            <label>Set Password*</label>
                            <input type="password" className="inputs" />
                        </div>

                        <div>
                            <Link to="/login">
                                <button className="btnL">
                                    SIGN UP
                                </button>
                            </Link>
                        </div>
                        <div>
                            <p>Already have an account <Link to="/login"> Login</Link> </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUP;