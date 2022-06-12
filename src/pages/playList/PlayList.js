import React, { useEffect } from 'react';
import "./PlayList.css"
import { Sidebar } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { deletePlaylist, playListGet ,playListPost} from '../Slices/featureSlice';

const PlayList = () => {
    const playlists = useSelector((state) => state.video.playList)

    const dispatch = useDispatch()
    const [nam, setNam] = useState("")

    const [desc, setDesc] = useState("")


    function cringe() {
        dispatch(playListPost({title:nam,description:desc}))
        dispatch(playListGet())
        setModal(true)
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
                            <div>
                                <button className='btns' onClick={() => { setModal(true) }} >Cancel</button>
                                <button className='btns' onClick={() => { cringe() }} >Create</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='btns' onClick={() => { setModal(false) }}>Create Playlist</button>
                    </div>
                    <div className='items'>
                        {
                            playlist.length > 0 ?
                                playlist.map((a) => {
                                    return (
                                        <div key={a._id}>
                                            <div className='P-card'>

                                                <div className='flex-row'>

                                                    <div className='flex-row'  >
                                                        <Link to={`/playlist/${a._id}`}><div >{a.title}</div></Link>
                                                        <div><span className="material-icons btns" onClick={() => { dispatch(deletePlaylist(a)) }}>delete</span></div>
                                                    </div>


                                                </div>
                                            </div>

                                        </div>
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