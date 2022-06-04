import React from 'react';
import { Sidebar } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { deleteWatchLater } from '../videoSlice/VideoSlice';
import { Link } from 'react-router-dom';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WatchLater = () => {

    const later = useSelector((state) => state.video.watchLater)

    const dispatch = useDispatch()

    function watchLaterHandler(a) {
        toast.success("deleted from watchList")
        dispatch(deleteWatchLater(a))
    }

    return (
        <>
            <div className='flex-rowns margin'>
                <div>
                    <div className='sideBar'>
                        <Sidebar />
                    </div>
                </div>
                <div className='mainContent'>

                    <div className='items'>

                        {
                            later.length > 0 ?
                                later.map((a) => {
                                    return (
                                        <>
                                            <div className='card'>
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
                                                <div><span class="material-icons delete" onClick={() => watchLaterHandler(a)} >delete</span></div>
                                            </div>

                                        </>
                                    )
                                })
                                : <h2 className='msg'>No Vides In Watch Later</h2>
                        }

                    </div>

                </div>
            </div>
        </>
    );
};

export default WatchLater;