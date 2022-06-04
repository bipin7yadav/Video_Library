import React from 'react';
import "./home.css"
import "../../global.css"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFilter } from '../videoSlice/VideoSlice';

const Home = () => {

    const dispatch = useDispatch()
    
    return (
        <div className='home'>
            <div className='align-center'>
                <img className='img-holder' src='./asset/Media player-bro.svg'/>
            </div>

            <div className='align-center cat'>
                <Link to="/Video"><span className='cats' onClick={()=>dispatch(addFilter(""))}>All</span></Link>
                <Link to="/Video"><span className='cats' onClick={()=>dispatch(addFilter("html"))}>Html</span></Link>
                <Link to="/Video"><span className='cats' onClick={()=>dispatch(addFilter("css"))}>CSS</span></Link>
                <Link to="/Video"><span className='cats' onClick={()=>dispatch(addFilter("javascript"))}>Javascript</span></Link>
                <Link to="/Video"><span className='cats' onClick={()=>dispatch(addFilter("react"))}>React Js</span></Link>
                <Link to="/Video"><span className='cats' onClick={()=>dispatch(addFilter("redux"))}>Redux</span></Link>
            </div>

            <div>
                <Link to="/Video"><button className="btn">Explore</button></Link>
            </div>

        </div>
    );
};

export default Home;