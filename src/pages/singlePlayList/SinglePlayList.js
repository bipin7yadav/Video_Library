import "./SinglePlayList.css"
import "../../global.css"
import { useParams, Link } from "react-router-dom";
import React from 'react';
import { useSelector} from 'react-redux';
import { Sidebar } from "../../components";

const SinglePlayList = () => {
    const { playlistId } = useParams()

    const list = useSelector((state) => state.video.playList);
    

    const m= useSelector((state)=>state.video.playKey)
    const show = list.find((a) => a.id == m)
    return (
        <div className="flex-rowns margin">
            <div>
                <div className="sideBar">
                    <Sidebar />
                </div>
            </div>
            <div className="items">
                {
                    (show.list).length > 0 ?
                        show.list.map((item) => {
                            return (
                                <>
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
                                            {/* <div className='date'>
                                                <span class="material-icons">more_vert</span>
                                            </div> */}
                                        </div>
                                    </div>
                                </>
                            )
                        })
                        :<h2 className="msg">Playlist is empty !!</h2>
                }
            </div>
        </div>
    );
};

export default SinglePlayList;