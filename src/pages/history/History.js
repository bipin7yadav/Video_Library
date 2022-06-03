import React from 'react';
import { Link } from 'react-router-dom';
import "../../global.css";
import "./History.css"
import { Sidebar } from '../../components';
import { useSelector, useDispatch } from 'react-redux';



const History = () => {


    const dispatch =useDispatch()
    return (
        <div className='flex-rowns margin'>
            <div className="sideBar">
                <Sidebar />
            </div>

            <div className='mainContent'>
                
            </div>
        </div>
    );
};

export default History;