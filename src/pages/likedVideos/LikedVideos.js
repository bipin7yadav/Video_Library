import React from 'react';
import "../../global.css"
import { Sidebar } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const LikedVideos = () => {
    const dispatch =useDispatch()
    return (
        <>
            <div className='flex-rowns margin'>
                <div>
                    <div className='sideBar'>
                        <Sidebar />
                    </div>
                </div>
                <div className='mainContent'>
                </div>
            </div>
        </>
    );
};

export default LikedVideos;