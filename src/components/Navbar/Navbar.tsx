import React from 'react';
import n from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import profileIcon from '../../assets/icons/premium-icon-user-profile-2734847.png'
import messageIcon from '../../assets/icons/messenger.png'
import usersIcon from '../../assets/icons/user.png'
import newsIcon from '../../assets/icons/news.png'
import musicIcon from '../../assets/icons/musical-note.png'
import settingsIcon from '../../assets/icons/settings.png'

export const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}><NavLink to="/Profile" activeClassName={n.activeLink}><img className={n.icon} src={profileIcon} alt=''/>Profile</NavLink></div>
            <div className={n.item}><NavLink to="/Message" activeClassName={n.activeLink}><img className={n.icon} src={messageIcon} alt=''/>Message</NavLink></div>
            <div className={n.item}><NavLink to="/Users" activeClassName={n.activeLink}><img className={n.icon} src={usersIcon} alt=''/>Users</NavLink></div>
            <div className={n.item}><NavLink to="/News" activeClassName={n.activeLink}><img className={n.icon} src={newsIcon} alt=''/>News</NavLink></div>
            <div className={n.item}><NavLink to="/Music" activeClassName={n.activeLink}><img className={n.icon} src={musicIcon} alt=''/>Music</NavLink></div>
            <div className={n.item}><NavLink to="/Settings" activeClassName={n.activeLink}><img className={n.icon} src={settingsIcon} alt=''/>Settings</NavLink></div>
        </nav>
    )
}

