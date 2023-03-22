import React, { useEffect } from 'react';
import "./PlayList.css"
import "../../global.css"
import { Sidebar } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { deletePlaylist, playListGet ,playListPost} from '../Slices/featureSlice';
import { toast } from 'react-toastify';

const PlayList = () => {
    const playlists = useSelector((state) => state.video.playList)

    const dispatch = useDispatch()
    const [nam, setNam] = useState("")

    const [desc, setDesc] = useState("")


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

    useEffect(() => {
        dispatch(playListGet())
    }, [dispatch])

    const { playlist } = useSelector(state => state.features)

    const [modal, setModal] = useState(true)
    return (
        <>
            <div className='flex-rowns margin'>
                <div>
                    <div className='sideBar'>
                        <Sidebar />
                    </div>
                </div>

                <div className='mainContent'>
                    <div className='modal' style={{ display: modal ? "none" : "block" }}>
                        <div className='contents'>
                            <div>
                                <label>PlayList Name</label>
                                <input className='inp' value={`${nam}`} onChange={(e) => setNam(e.target.value)} />
                            </div>
                            <div>
                                <label>Description</label>
                                <input className='inp' value={`${desc}`} onChange={(e) => setDesc(e.target.value)} />
                            </div>
                            <div className='flex-row'>
                                <button className='play-btn' onClick={() => { setModal(true) }} >Cancel</button>
                                <button className='play-btn' onClick={() => { cringe() }} >Create</button>
                            </div>
                        </div>
                    </div>
                    <div className='cardBlock'>
                    <div>
                        <button className='btns' onClick={() => { setModal(false) }}>Create Playlist</button>
                    </div>
                    <div className='items'>
                        {
                            playlist !==undefined ? playlist.length ?
                                playlist.map((a) => {
                                    return (
                                        <>
                                        {a.videos.length>0?
                                            <div key={a._id} style={{boxSizing:"border-box"}}>
                                            <div className='P-card' 
                                            style={{backgroundImage:`url(http://img.youtube.com/vi/${a.videos[0].src}/mqdefault.jpg)`,
                                            objectFit:"contain",backgroundSize:"contain"
                                             }}
                                            >

                                                <div className='flex-row'>

                                                    <div className='flex-row'  >
                                                        <Link to={`/playlist/${a._id}`}><div className='pTitle'>{a.title}</div></Link>
                                                        <div className='deleteIcon'><span className="material-icons btns" onClick={() => { dispatch(deletePlaylist(a)) }}>delete</span></div>
                                                    </div>


                                                </div>
                                            </div>

                                        </div>
                                        :
                                        <div key={a._id} style={{objectFit:"contain"}}>
                                            <div className='P-card'>

                                                <div className='flex-row'>

                                                    <div className='flex-row'  >
                                                        <Link to={`/playlist/${a._id}`}><div >{a.title}</div></Link>
                                                        <div><span className="material-icons btns" onClick={() => { dispatch(deletePlaylist(a)) }}>delete</span></div>
                                                    </div>


                                                </div>
                                            </div>

                                        </div>
                                }
                                        </>)
                                })
                                : <h2 className='msg'>No Liked Videos</h2>
                                :
                                <h2 className='msg'>Make Your Own Playlist</h2>
                        }
                    </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default PlayList;