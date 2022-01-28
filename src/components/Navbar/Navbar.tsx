import React from 'react';
import n from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}><NavLink to="/Profile" activeClassName={n.activeLink}>Profile</NavLink></div>
            <div className={n.item}><NavLink to="/Message" activeClassName={n.activeLink}>Message</NavLink></div>
            <div className={n.item}><NavLink to="/Users" activeClassName={n.activeLink}>Users</NavLink></div>
            <div className={n.item}><NavLink to="/News" activeClassName={n.activeLink}>News</NavLink></div>
            <div className={n.item}><NavLink to="/Music" activeClassName={n.activeLink}>Music</NavLink></div>
            <div className={n.item}><NavLink to="/Settings" activeClassName={n.activeLink}>Settings</NavLink></div>
        </nav>
    )
}
