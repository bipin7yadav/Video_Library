import "./SinglePlayList.css"
import "../../global.css"
import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Sidebar } from "../../components";
import { deletePlaylistVideo, getPlaylistVideo, playListGet } from "../Slices/featureSlice";


const SinglePlayList = () => {
    const { playlistId } = useParams()

    const dispatch = useDispatch()

    const {playlist}=useSelector((state)=>state.features)
    const [dependency,setDependency] = useState(false);

    useEffect(()=>{
        dispatch(playListGet())
    },[dependency])


    let mapPlaylist ={videos:[]}
    if (playlist !== undefined){
         mapPlaylist= playlist.find((elem)=>elem._id==playlistId)

    }
     console.log(playlistId,"id");

    return (
        <div className="flex-rowns margin">
            <div>
                <div className="sideBar">
                    <Sidebar />
                </div>
            </div>
            <div className="items">
                {
                    mapPlaylist !== undefined  ?
                    mapPlaylist.videos.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className='card gap'>
                                        <div >
                                            <Link style={{ textDecoration: "none" }} to={`/video/${item.src}`}><img  className='thumbnail' src={`http://img.youtube.com/vi/${item.src}/mqdefault.jpg`} /></Link>
                                        </div>
                                        <div className='flex-row'>
                                            <div className='data'>
                                                <div>{item.title}</div>
                                                <div className='flex-row view'>
                                                    <div className='creator'>{item.creator}</div>
                                                    <div>{item.view} views</div>
                                                </div>
                                            </div>
                                            <div><span className="material-icons delete" onClick={() =>{
                                                setDependency(!dependency)
                                                dispatch(deletePlaylistVideo({mapPlaylist,item}))}} >delete</span></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :<h2 className="msg">Playlist is empty !!</h2>
                }
            </div>
        </div>
    );
};

export default SinglePlayList;