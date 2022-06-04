import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';;
import { Sidebar } from '../../components';
import "./screenPlay.css"
import { useSelector, useDispatch } from 'react-redux';
import { addLike, addWatch ,addHistory , deleteLike ,deleteWatchLater} from '../videoSlice/VideoSlice';
import {v4 as uuid} from "uuid"
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ScreenPlay = () => {

    const dispatch = useDispatch()

    const data = useSelector((state) => state.video.video)


    const { videoId } = useParams();

    const post = data.find((a) => a.src === videoId)

    const [Like,setLike]=useState(true)
    const [watch,setWatch]=useState(true)
    const [play,setPlay]=useState(true)

    function like(post){
        setLike(!Like)
        if(Like){
            toast.success("Video Liked")
            dispatch(addLike(post))
        }else{
            toast.warning("video unliked")
            dispatch(deleteLike(post))
        }

    }

    function watchLater(post){
        setWatch(!watch)
        if(watch){
            toast.success("added to watchLater")
            dispatch(addWatch(post))
        }else{
            toast.warning("removed from watchLater")
            dispatch(deleteWatchLater(post))
        }
    }
        
    
    return (
        <div className='flex-rowns '>
            <div className='sideBar'>
                <Sidebar />
            </div>
        
            <div className='player align-center flex-column'>
                
                <div className='play'>

                    <ReactPlayer
                        // url={`https://youtu.be/${videoId}`}
                        url={`https://www.youtube.com/embed/${videoId}`}
                        className="react-player"
                        width="100%"
                        height="100%"
                        controls={true}
                        onPlay={()=>dispatch(addHistory(post))}
                    />

                </div>
                <div className='info'>

                    <h3>{post.title}</h3>
                    <h4>{post.creator}</h4>
                    <div>{post.description}</div>
                    <div className='simple-flex-row btn-gap'>
                        <div>
                            <span className="material-icons icon" style={{color:play?"black":"blue"}}  >playlist_add_circle</span>
                        </div>
                        <div>
                            <span className="material-icons icon" style={{color:Like?"black":"blue"}} onClick={() => like(post)}>thumb_up</span>
                        </div>
                        <div>
                            <span className="material-icons icon" style={{color:watch?"black":"blue"}} onClick={() => watchLater(post)}>watch_later</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ScreenPlay;