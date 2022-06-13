import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {logoutHandler} from "../../pages/Slices/AuthSlice"

const Logout = () => {
    const dispatch = useDispatch()
    return (
        <div>

            <form className="loginForm" >
                <div className="scontent" >
                    <div className="inp">
                        <h3>Aadarsh Balika</h3>
                    </div>
                    <div>
                        Thank You Aadarsh for being an active user of our Video Library App . 
                        I hope you are enjoying our content and we assure you that we will keep posting 
                        such content which you enjoy.
                    </div>
                    <div>
                        <Link to="/login">
                            <button className="btnL" onClick={()=>{dispatch(logoutHandler())}}>
                                Log Out 
                            </button>
                        </Link>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Logout;