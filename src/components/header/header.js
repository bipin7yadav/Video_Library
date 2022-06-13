
import React from 'react';
import "../../global.css"
import "./header.css"
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
    const {status}= useSelector((state)=>state.login)
    return (
        <div className='flex-row header'>
            <div className='align-level'>
                <Link to="/"><span className="material-icons logo">play_circle_filled</span></Link>
                <Link to="/"><span className='lN'>UltraPlay</span></Link>
            </div>
            <div className='align-level'>
                <Link  to={status?"/login":"/logout"}><span className='material-icons logo'>account_circle</span></Link>
            </div>
        </div>
    );
};

export { Header };