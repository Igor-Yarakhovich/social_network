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
            <div className={n.item}>
                <NavLink to="/Profile" activeClassName={n.activeLink}>
                    <div className={n.itemContent}>
                        <div><img className={n.icon} src={profileIcon} alt=''/></div>
                        <div className={n.itemText}>Profile</div>
                    </div>
                </NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/Message" activeClassName={n.activeLink}>
                    <div className={n.itemContent}>
                        <div><img className={n.icon} src={messageIcon} alt=''/></div>
                        <div className={n.itemText}>Message</div>
                    </div>
                </NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/Users" activeClassName={n.activeLink}>
                    <div className={n.itemContent}>
                        <div><img className={n.icon} src={usersIcon} alt=''/></div>
                        <div className={n.itemText}>Users</div>
                    </div>
                </NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/News" activeClassName={n.activeLink}>
                    <div className={n.itemContent}>
                        <div><img className={n.icon} src={newsIcon} alt=''/></div>
                        <div className={n.itemText}>News</div>
                    </div>
                </NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/Music" activeClassName={n.activeLink}>
                    <div className={n.itemContent}>
                        <div><img className={n.icon} src={musicIcon} alt=''/></div>
                        <div className={n.itemText}>Music</div>
                    </div>
                </NavLink>
            </div>
            <div className={n.item}>
                <NavLink to="/Settings" activeClassName={n.activeLink}>
                    <div className={n.itemContent}>
                        <div><img className={n.icon} src={settingsIcon} alt=''/></div>
                        <div className={n.itemText}>Settings</div>
                    </div>
                </NavLink>
            </div>
        </nav>
    )
}

