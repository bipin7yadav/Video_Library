import React from 'react';
import "../../global.css"
import { Sidebar } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteLike } from '../videoSlice/VideoSlice';
import { toast } from 'react-toastify';


const LikedVideos = () => {
    const likes = useSelector((state) => state.video.likedVideos)
    const dispatch = useDispatch()

    function likeHandler(a) {
        toast.success("removed from liked videos ")
        dispatch(deleteLike(a))
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

                    <div className='items gap'>
                        {
                            likes.length > 0 ?
                                likes.map((a) => {
                                    return (
                                        <>
                                            <div className='card gap'>
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
                                                <div><span class="material-icons delete" onClick={() => likeHandler(a)}>delete</span></div>
                                            </div>

                                        </>
                                    )
                                })
                                : <h2 className='msg'>No Liked Videos</h2>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default LikedVideos;