import React from 'react';

const Logout = () => {
    return (
        <div>

            <form className="loginForm" >
                <div className="scontent" >
                    <div className="inp">
                        <label>Aadarsh Balika</label>
                    </div>
                    <div>
                        <Link to="/login">
                            <button className="btnL">
                                Log Out 
                            </button>
                        </Link>
                    </div>
                    <div>
                        <p>Already have an account <Link to="/login"> Login</Link> </p>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Logout;