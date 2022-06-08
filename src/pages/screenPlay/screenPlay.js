import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';;
import { Sidebar } from '../../components';
import "./screenPlay.css"
import { useSelector, useDispatch } from 'react-redux';
import {
    addLike, addWatch, addPlayList, addplayItem, addKey
    , deleteLike, deleteWatchLater, addHistory, deleteHistory, getPosts
} from '../videoSlice/VideoSlice';
import { v4 as uuid } from "uuid"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ScreenPlay = () => {

    const data = useSelector((state) => state.video.video)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    const list = useSelector((state) => state.video.playList)


    const { videoId } = useParams();

    const post = data.find((a) => a.src === videoId)

    const allLike = useSelector((state) => state.video.likedVideos)
    const checkWatchLater = useSelector((state) => state.video.watchLater)

    const [modal, setModal] = useState(true)

    const [nam, setNam] = useState("")

    function addtoPL(a) {
        dispatch(addKey(a.id))
        dispatch(addplayItem(post))
        toast.success(`added to ${a.Name}`)
        setModal(true)
    }

    const List = {
        id: uuid(),
        Name: nam,
        list: []
    }
    function cringe() {
        dispatch(addPlayList(List))
        setNam("")
        // setModal(true)
    }

    const [Like, setLike] = useState(true)
    const [watch, setWatch] = useState(true)
    const [play, setPlay] = useState(true)




    function like(post) {
        setLike(!Like)
        if (Like) {
            dispatch(deleteLike(post))
            toast.success("Video Liked")
            dispatch(addLike(post))
        } else {
            toast.warning("video unliked")
            dispatch(deleteLike(post))
        }

    }

    function watchLater(post) {
        setWatch(!watch)
        if (watch) {
            dispatch(deleteWatchLater(post))
            toast.success("added to watchLater")
            dispatch(addWatch(post))
        } else {
            toast.warning("removed from watchLater")
            dispatch(deleteWatchLater(post))
        }
    }

    function historyHandler(post) {
        dispatch(deleteHistory(post))
        dispatch(addHistory(post))
    }

    function playList() {
        // setPlay(false)
        setModal(!modal)
    }


    return (
        <>
            <div className='modals' style={{ display: modal ? "none" : "block" }} >
                <div className='contents'>
                    <div>Add PlayList</div>
                    <div>
                        <input className='inp' value={`${nam}`} onChange={(e) => setNam(e.target.value)} />
                    </div>
                    <div className='map'>
                        {
                            list.length > 0 ?
                                list.map((a) => {
                                    return (
                                        <div key={`${a.id}`}>
                                            <input type="checkbox" value={a.Name} onClick={() => { addtoPL(a) }} />
                                            <label>{a.Name}</label>
                                        </div>
                                    )
                                }) :
                                <span></span>
                        }
                    </div>
                    <div>
                        <button className='btns' onClick={() => { setModal(true) }} >Cancel</button>
                        <button className='btns' onClick={() => { cringe() }} >Create</button>
                    </div>
                </div>
            </div>
            <div className='flex-rowns margin '>
                <div className='sideBar'>
                    <Sidebar />
                </div>

                <div className='player align-center flex-column'>

                    {
                        data.map((a) => {
                            if (a.src == videoId) {
                                return (
                                    <>
                                        <div className='play'>

                                            <ReactPlayer
                                                // url={`https://youtu.be/${videoId}`} 
                                                url={`https://www.youtube.com/embed/${videoId}`}
                                                className="react-player"
                                                width="100%"
                                                height="100%"
                                                controls={true}
                                                onPlay={() => historyHandler(post)}
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
                                    </>
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
