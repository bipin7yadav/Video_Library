import React from 'react';
import "./notFound.css"

const NotFound = () => {
    return (
        <div>
            <div>
                <img className='notFound' src='/asset/404 Not Found.svg'/>
            </div>
            <div>
                <h2 style={{color:"red"}}>Page Not Found !!!!!</h2>
                <h2>The Page You Are Trying To Reach Does Not Exist</h2>
            </div>
        </div>
    );
};

export default NotFound;