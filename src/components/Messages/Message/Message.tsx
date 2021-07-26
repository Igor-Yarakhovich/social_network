import React from 'react';

import m from './Message.module.css'



type MessagePropsType = {
    id:string
    text: string
}

export const Message: React.FC<MessagePropsType> = (props) => {
    return <div className={m.item_text}>
        {props.text}
    </div>
}

