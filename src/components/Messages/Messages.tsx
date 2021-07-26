import React, {ChangeEvent} from 'react';
import m from './Messages.module.css'

import {Dialogs} from "./Dialogs/Dialogs";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/types";

type MessagesType = {
    messagesData: Array<MessageType>
    dialogsData: Array<DialogType>
    newMessageCallback:()=>void
    changeNewMessageCallback:(newMessage:string)=>void
    newMessageText:string
}
export const Messages = (props: MessagesType) => {
    let messageElement = props.messagesData.map((d: MessageType) => <Dialogs name={d.name} id={d.id}/>)
    let dialogElement = props.dialogsData.map((m: DialogType) => <Message text={m.text} id={m.id}/>)

    let addMessage = () => {
        props.newMessageCallback()
    }

    let onMessageOnchange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewMessageCallback(e.currentTarget.value);
    }
    return (
        <div className={m.Messages}>
            <div className={m.Messages_text}>
                {messageElement}
            </div>
            <div className={m.Messages_items}>
                {dialogElement}
            </div>
            <textarea onChange={onMessageOnchange}
                      value={props.newMessageText}
            />
            <button className={m.ButtonMessage} onClick={ addMessage }>Send message</button>
        </div>
    )
}