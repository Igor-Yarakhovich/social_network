import React from 'react';
import m from './Posts.module.css'
import userPhoto from '../../../../assets/images/userPhoto.png'

type MessagePropsType = {
    message: string
    counts: number
}

export const Post: React.FC<MessagePropsType> = (props) => {
    return (
        <div>
            <div className={m.item}>
                <div className={m.content}>
                    <div>
                        <img alt=''
                             src={userPhoto}/>
                    </div>
                    <div className={m.text}>
                        {props.message}
                    </div>
                </div>
                <div className={m.likes}>
                    <span className={m.params}>likes:</span><span className={m.value}>{props.counts}</span>
                </div>
            </div>
        </div>
    )
}

