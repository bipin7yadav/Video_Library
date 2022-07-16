import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';;
import { Sidebar } from '../../components';
import "./screenPlay.css"
import "../../global.css"
import { useSelector, useDispatch } from 'react-redux';
import { getPosts} from '../videoSlice/VideoSlice';
import { toast } from 'react-toastify';

import {  HistoryPost, likePost, playListGet, playListPost, postPlaylistVideo, watchLaterPost } from '../Slices/featureSlice';

const ScreenPlay = () => {

    
    const { videoId } = useParams();
    const data = useSelector((state) => state.video.video)
    

    const dispatch = useDispatch()
    const {playlist}= useSelector((state)=>state.features)
    
    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])


    const post = data.find((a) => a.src === videoId)


    const [modal, setModal] = useState(true)

    const [nam, setNam] = useState("")

    const [desc, setDesc] = useState("")

    function addtoPL(a) {
        dispatch(postPlaylistVideo({a,post}))
        toast.success(`added to ${a.title}`)
        setModal(true)
    }
    function cringe() {
        let k=playlist.reduce((a,c)=>{
            return [...a,c.title]
        },[])
        
        if(nam!="" ){
            if(!k.includes(nam) ){
                dispatch(playListPost({title:nam,description:desc}))
            }else{
                toast.info("already exists")
            }
        }else{
            toast.info("Enter Valid Name")
        }
        dispatch(playListGet())
        setNam("")
        setDesc("")
    }

    const [Like, setLike] = useState(true)
    const [watch, setWatch] = useState(true)
    const [play, setPlay] = useState(true)




    function like(post) {
        setLike(!Like)
        toast.success("Video Liked")
        dispatch(likePost(post))

    }

    function watchLater(post) {
        setWatch(!watch)
        dispatch(watchLaterPost(post))
        toast.success("added to watchLater")
    }

    function playList() {
        setModal(false)
    }


    return (
        <>
            <div className='modals' style={{ display: modal ? "none" : "block" }} >
                <div className='contents'>
                    <div>
                        <label>PlayList Name</label>
                        <input className='inp' value={`${nam}`} onChange={(e) => setNam(e.target.value)} />
                    </div>
                    <div>
                        <label>Description</label>
                        <input className='inp' value={`${desc}`} onChange={(e) => setDesc(e.target.value)} />
                    </div>
                    <div className='map'>
                        {
                            playlist.length > 0 ?
                                playlist.map((a) => {
                                    return (
                                        <div key={`${a._id}`}>
                                            <input type="checkbox" value={a.title} onClick={() => { addtoPL(a) }} />
                                            <label>{a.title}</label>
                                        </div>
                                    )
                                }) :
                                <span></span>
                        }
                    </div>
                    <div className='flex-row'>
                        <button className='play-btn' onClick={() => { setModal(true) }} >Cancel</button>
                        <button className='play-btn' onClick={() => { cringe() }} >Create</button>
                    </div>
                </div>
            </div>
            <div className='flex-rowns margin '>
                <div className='sideBar'>
                    <Sidebar />
                </div>

                <div className='playing  flex-column'>

                    {
                        data.map((a) => {
                            if (a.src === videoId) {
                                return (
                                    <div key={a.id} >
                                        <div className='play'>

                                            <ReactPlayer
                                                url={`https://www.youtube-nocookie.com/embed/${a.src}?autoplay=1`}
                                                className="react-player"
                                                width="100%"
                                                height="100%"
                                                controls={true}
                                                playing
                                                onStart={() => dispatch(HistoryPost(a))}
                                            />

                                        </div>
                                        <div className='info'>

                                            <h3>{a.title}</h3>
                                            <h4>{a.creator}</h4>
                                            <div>{a.description}</div>
                                            <div className='simple-flex-row btn-gap'>
                                                <div>
                                                    <span className="material-icons icon" style={{ color: play ? "black" : "blue" }} onClick={() => { playList(a) }}>playlist_add_circle</span>
                                                </div>
                                                <div>
                                                    <span className="material-icons icon" style={{ color: Like ? "black" : "blue" }} onClick={() => like(a)}>thumb_up</span>
                                                </div>
                                                <div>
                                                    <span className="material-icons icon" style={{ color: watch ? "black" : "blue" }} onClick={() => watchLater(a)}>watch_later</span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                )
                            }
                        })
                    }

                </div>
            </div>
        </>
    );
};

export default ScreenPlay;