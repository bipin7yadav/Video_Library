
import React from 'react';
import "../../global.css"
import "./header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex-row header'>
            <div className='align-level'>
                <Link to="/"><span className="material-icons logo">play_circle_filled</span></Link>
                <Link to="/"><span className='lN'>UltraPlay</span></Link>
            </div>
            <div className='align-level'>
                <Link to="/login"><span className='material-icons logo'>account_circle</span></Link>
            </div>
        </div>
    );
};

export { Header };