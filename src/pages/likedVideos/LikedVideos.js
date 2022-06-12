import React, { useEffect } from 'react';
import "../../global.css"
import { Sidebar } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteLike, getPosts } from '../videoSlice/VideoSlice';
import {  toast } from 'react-toastify';
import { likeGet,deleteLiked } from '../Slices/featureSlice';

const LikedVideos = () => {

    const data = useSelector(state=>state.video.video);

    const likes = useSelector((state) => state.video.likedVideos)
    const dispatch =useDispatch()

    const {LikedVideo}= useSelector(state=>state.features)

    useEffect(()=>{
        dispatch(likeGet())
    },[dispatch])

    function likeHandler(a){
        toast.success("removed from liked videos ")
        dispatch(deleteLiked(a))
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
                            LikedVideo.length>0  ?
                                LikedVideo.map((a) => {
                                    return (
                                        <div key={a.id}>
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
                                                <div><span className="material-icons delete" onClick={()=>likeHandler(a)}>delete</span></div>
                                            </div>

                                        </div>
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