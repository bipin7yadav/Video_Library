import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';;
import { Sidebar } from '../../components';
import "./screenPlay.css"
import { useSelector, useDispatch } from 'react-redux';
import {v4 as uuid} from "uuid"

const ScreenPlay = () => {

    const dispatch = useDispatch()

    const data = useSelector((state) => state.video.video)


    const { videoId } = useParams();

    const post = data.find((a) => a.src === videoId)

        
    
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
                    />

                </div>
                <div className='info'>

                    <h3>{post.title}</h3>
                    <h4>{post.creator}</h4>
                    <div>{post.description}</div>
                    <div className='simple-flex-row btn-gap'>
                        <div>
                            <span class="material-icons icon"  >playlist_add_circle</span>
                        </div>
                        <div>
                            <span class="material-icons icon"  >thumb_up</span>
                        </div>
                        <div>
                            <span class="material-icons icon"  >watch_later</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ScreenPlay;