import React, {ChangeEvent} from 'react';
import m from './Messages.module.css'

import {Dialogs} from "./Dialogs/Dialogs";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/types";

type MessagesType = {
    messagesData: Array<MessageType>
    dialogsData: Array<DialogType>
    newMessageText: string
    addMessage: (newMessageText: string)=>void
    onMessageOnchange: (text:string)=>void
}
export const Messages = (props: MessagesType) => {
    let messageElement = props.messagesData.map((d: MessageType) => <Dialogs key={d.id} name={d.name} id={d.id}/>)
    let dialogElement = props.dialogsData.map((m: DialogType) => <Message key={m.id} text={m.text} id={m.id}/>)

    let addMessage = () => {
        props.addMessage(props.newMessageText)
    }

    let onMessageOnchange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.onMessageOnchange(text)
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
                      placeholder={'Enter your message'}
            />
            <button className={m.ButtonMessage} onClick={addMessage}>Send message</button>
        </div>
    )
}