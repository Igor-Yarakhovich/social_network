import React from 'react';
import m from './Music.module.css'
import music from '../../assets/images/musicNota.png'

export const Music = () => {
    return (
        <div className={m.music}>
            <img src={music} alt=''/>
        </div>
    )
}