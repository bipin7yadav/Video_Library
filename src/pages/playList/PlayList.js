import React from 'react';
import "./PlayList.css"
import { Sidebar } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuid } from "uuid"
import { Link } from 'react-router-dom';

const PlayList = () => {
   
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

export default PlayList;