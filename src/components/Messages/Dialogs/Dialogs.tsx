import React from 'react';
import {NavLink} from 'react-router-dom';
import m from './Dialogs.module.css'
import userPhoto from '../../../assets/images/UserAvatar.png'


type DialogsPropsType = {
    id: string
    name: string
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    let path = '/Message/' + props.id
    return <div className={m.item}>
        <img alt='' src={userPhoto} />
        <NavLink to={path}>
            <div className={m.name}>{props.name}</div>
        </NavLink>
    </div>
}

