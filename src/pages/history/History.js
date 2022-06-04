import React from 'react';
import { Link } from 'react-router-dom';
import "../../global.css";
import "./History.css"
import { Sidebar } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { deleteHistory } from '../videoSlice/VideoSlice';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const History = () => {


    const historyData = useSelector((state) => state.video.history)

    const dispatch = useDispatch()

    function historyHandler(a) {
        toast.success("history deleted")
        dispatch(deleteHistory(a))
    }
    return (
        <div className='flex-rowns margin'>
            <div className="sideBar">
                <Sidebar />
            </div>

            <div className='mainContent'>

                <div className='items' >
                    {

                        historyData.length > 0 ?
                            historyData.map((a) => {
                                return (
                                    <>
                                        <div className='card flex-column'>
                                            <div >
                                                <Link style={{ textDecoration: "none" }} to={`/video/${a.src}`}><img onClick={() => { play(a) }} className='thumbnail' src={`http://img.youtube.com/vi/${a.src}/mqdefault.jpg`} /></Link>
                                            </div>
                                            <div className='flex-row'>
                                                <div className='data'>
                                                    <div>{a.title}</div>
                                                    <div className='flex-row view'>
                                                        <div className='creator'>{a.creator}</div>
                                                        <div>{a.view} views</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div><span class="material-icons delete" onClick={() => historyHandler(a)} >delete</span></div>
                                        </div>
                                    </>
                                )
                            })
                            : <h2 className='msg'>Your History Is Empty</h2>
                    }
                </div>

            </div>
        </div>
    );
};

export default History;