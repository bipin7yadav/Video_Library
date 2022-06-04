import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../global.css"
import "./sidebar.css"

const Sidebar = () => {
    return (

        <div className='flex-column sidebar '>

            <div className='flex-rowns gap'>
                <NavLink to="/Video" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><span class="material-icons">explore </span></NavLink>
                <NavLink to="/Video" className={({ isActive }) => (isActive ? 'active mob' : 'inactive mob')}><h2>Explore</h2></NavLink>
            </div>
            <div className='flex-rowns gap'>
                <NavLink to="/playList" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><span class="material-icons">playlist_add_circle</span></NavLink>
                <NavLink to="/playList" className={({ isActive }) => (isActive ? 'active mob' : 'inactive mob')}><h2>Play List</h2></NavLink>
            </div>
            <div className='flex-rowns gap'>
                <NavLink to="/likedVideos" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><span class="material-icons">thumb_up</span></NavLink>
                <NavLink to="/likedVideos" className={({ isActive }) => (isActive ? 'active mob' : 'inactive mob')}><h2>Liked Videos</h2></NavLink>
            </div>
            <div className='flex-rowns gap'>
                <NavLink to="/watchLater" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><span class="material-icons">watch_later</span></NavLink>
                <NavLink to="/watchLater" className={({ isActive }) => (isActive ? 'active mob' : 'inactive mob')}><h2>Watch Later</h2></NavLink>
            </div>
            <div className='flex-rowns gap'>
                <NavLink to="/history" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><span class="material-icons">history</span></NavLink>
                <NavLink to="/history" className={({ isActive }) => (isActive ? 'active mob' : 'inactive mob')}><h2>History</h2></NavLink>
            </div>
        </div>

    );
};

export default Sidebar;