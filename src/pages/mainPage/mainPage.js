import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Sidebar } from '../../components';
import { getPosts } from '../videoSlice/VideoSlice';
import "../../global.css"
import "./mainPage.css"



const MainPage = () => {


    const dispatch = useDispatch()
    const data = useSelector((state) => state.video.video)

    const load =useSelector((state)=>state.video.loading)

    


    useEffect(()=>{
        dispatch(getPosts())
    },[])

    function filteredVideo() {
        let videos = data

        return videos
    }



    return (
        <div className='flex-rowns margin'>
            <div className='sideBar'>
                <Sidebar />
            </div>
            <div className='mainContent' >
                <div className='align-center searchbar'>
                    <input className='serchbarWidth'  placeholder='Search' />
                </div>
                <div className='align-center gap cat'>
                    <span className='cats ' >All</span>
                    <span className='cats' >Html</span>
                    <span className='cats' >CSS</span>
                    <span className='cats' >Javascript</span>
                    <span className='cats' >React Js</span>
                    <span className='cats' >Redux</span>
                </div>
                <div className='items'>


                    {
                        !load ?
                            filteredVideo().map((a) => {
                                return (
                                    <>
                                        <Link style={{ textDecoration: "none" }} to={`/video/${a.src}`}>
                                            <div className='card' key={a.id}>
                                                <div >
                                                    <img  className='thumbnail' alt='thumbnail' src={`http://img.youtube.com/vi/${a.src}/mqdefault.jpg`} />
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

                                    </>
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
