import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../global.css";
import "./History.css"
import { Sidebar } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearHistory, HistoryGet, removeHistory } from '../Slices/featureSlice';


const History = () => {



    const dispatch = useDispatch()

    const { History } = useSelector(state => state.features)

    useEffect(() => {
        dispatch(HistoryGet())
    }, [dispatch])

    function historyHandler(a) {
        toast.success("history deleted")
        dispatch(removeHistory(a))
        dispatch(deleteHistory(a))
    }
    return (
        <div className='flex-rowns margin'>
            <div className="sideBar">
                <Sidebar />
            </div>

            <div className='mainContent'>
                <div>
                    <button className='btns' onClick={() => { dispatch(clearHistory()) }}>Clear History</button>
                </div>
                <div className='items' >
                    {

                        History !==undefined ? History.length  ?
                            History.map((a) => {
                                return (
                                    <div key={a.id}>
                                        <div className='card flex-column' >
                                            <div >
                                                <Link style={{ textDecoration: "none" }} to={`/video/${a.src}`}><img onClick={() => { play(a) }} className='thumbnail' src={`http://img.youtube.com/vi/${a.src}/mqdefault.jpg`} /></Link>
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
                                            <div className='deleteIcon'><span className="material-icons delete" onClick={() => historyHandler(a)} >delete</span></div>
                                        </div>
                                    </div>
                                )
                            })
                            : <h2 className='msg'>Your History Is Empty</h2>
                            : <h2 className='msg'>Your History Is Empty</h2>
                    }
                </div>
            </div>
        </div>
    );
};

export default History;