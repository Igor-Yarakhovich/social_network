import React from 'react';
import h from "./Header.module.css"
import {NavLink} from "react-router-dom";
import logo from '../../assets/images/Social_network-removebg-preview.png'

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <header className={h.header}>
            <img
                src={logo}
                 alt="logo website, website icon with png and vector format for unlimited"/>
            <div className={h.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

