import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Sidebar } from '../../components';
import { addSearch, addFilter, addVideo, addHistory } from '../videoSlice/VideoSlice';
import { getPosts } from '../videoSlice/VideoSlice';
import "../../global.css"
import "./mainPage.css"



const MainPage = () => {


    const dispatch = useDispatch()
    const bysearch = useSelector((state) => state.video.search)
    const byfilter = useSelector((state) => state.video.filter)
    const data = useSelector((state) => state.video.video)

    const load = useSelector((state) => state.video.loading)

    function play(a) {
        dispatch(addSearch(""))
    }


    useEffect(() => {
        dispatch(getPosts())
    }, [])

    function filteredVideo() {
        let videos = data

        if (bysearch) {
            videos = videos.filter((a) => a.title.toLowerCase().includes(bysearch))
        }

        if (byfilter) {
            videos = videos.filter((a) => a.title.toLowerCase().includes(byfilter))
        }

        return videos
    }




    return (
        <div className='flex-rowns margin'>
            <div className='sideBar'>
                <Sidebar />
            </div>
            <div className='mainContent' >
                <div className='align-center searchbar'>
                    <input className='serchbarWidth' onChange={(e) => dispatch(addSearch(e.target.value))} placeholder='Search' />
                </div>
                <div className='align-center gap cat'>
                    <span className='cats ' onClick={() => dispatch(addFilter(""))}>All</span>
                    <span className='cats' onClick={() => dispatch(addFilter("html"))}>Html</span>
                    <span className='cats' onClick={() => dispatch(addFilter("css"))}>CSS</span>
                    <span className='cats' onClick={() => dispatch(addFilter("javascript"))}>Javascript</span>
                    <span className='cats' onClick={() => dispatch(addFilter("react"))}>React Js</span>
                    <span className='cats' onClick={() => dispatch(addFilter("redux"))}>Redux</span>
                </div>
                <div className='items'>


                    {
                        !load ?
                            filteredVideo().map((a) => {
                                return (
                                    <div key={a.id}>
                                        <Link style={{ textDecoration: "none" }} to={`/video/${a.src}`}>
                                            <div className='card' key={`${a.id}`}>
                                                <div >
                                                    <img onClick={() => play(a)} className='thumbnail' alt='thumbnail' src={`http://img.youtube.com/vi/${a.src}/mqdefault.jpg`} />
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

                                            </div>
                                        </Link>

                                    </div>
                                )
                            })
                            : <h2 className='msg'>Loading.......</h2>
                    }
                </div>
            </div>
        </div>
    );
};

export default MainPage;
