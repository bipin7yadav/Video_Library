import React from 'react';
import "./PlayList.css"
import { Sidebar } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addPlayList, deletePlayListItem,add } from '../videoSlice/VideoSlice';
import { v4 as uuid } from "uuid"
import { Link } from 'react-router-dom';

const PlayList = () => {

    const playlists = useSelector((state) => state.video.playList)
    const dispatch = useDispatch()
    const [nam, setNam] = useState("")

    const List = {
        id: uuid(),
        Name: nam,
        list: []
    }

    function playlistManagement() {
        dispatch(addPlayList(List))
        setNam("")
        setModal(!modal)
    }

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
                        <div className='content'>
                            <div>Add PlayList</div>
                            <div>
                                <input className='inp' value={`${nam}`} onChange={(e) => setNam(e.target.value)} />
                            </div>
                            <div>
                                <button className='btns' onClick={() => { setModal(!modal) }}>Cancel</button>
                                <button className='btns' onClick={() => { playlistManagement() }}>Create</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='btns' onClick={() => { setModal(false) }}>Create Playlist</button>
                    </div>
                    <div className='items'>
                        {
                            playlists.length > 0 ?
                                playlists.map((a) => {
                                    return (
                                        <>
                                            <div className='P-card'>

                                                <div className='flex-row'>

                                                    <div className='flex-row'  >
                                                        <Link  to={`/playlist/:${a.id}`}><div onClick={()=>{dispatch(add(a.id))}}>{a.Name}</div></Link>
                                                        <div><span class="material-icons btns" onClick={() => { dispatch(deletePlayListItem(a)) }}>delete</span></div>
                                                    </div>


                                                </div>
                                            </div>

                                        </>
                                    )
                                })
                                :
                                <h2 className='msg'>Make Your Own Playlist</h2>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default PlayList;