import React, {ChangeEvent} from 'react';
import m from './Messages.module.css'

import {Dialogs} from "./Dialogs/Dialogs";
import {Message} from "./Message/Message";
import {ActionsType, DialogType, MessageType} from "../../redux/types";
import {changeNewMessageTextAC, newMessageAC} from "../../redux/state";

type MessagesType = {
    messagesData: Array<MessageType>
    dialogsData: Array<DialogType>
    newMessageText:string
    dispatch: (action: ActionsType) => void
    // newMessageCallback:()=>void
    // changeNewMessageCallback:(newMessage:string)=>void

}
export const Messages = (props: MessagesType) => {
    let messageElement = props.messagesData.map((d: MessageType) => <Dialogs name={d.name} id={d.id}/>)
    let dialogElement = props.dialogsData.map((m: DialogType) => <Message text={m.text} id={m.id}/>)

    let addMessage = () => {
        // props.newMessageCallback()
        props.dispatch(newMessageAC(props.newMessageText))
    }

    let onMessageOnchange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.changeNewMessageCallback(e.currentTarget.value);
        props.dispatch(changeNewMessageTextAC(e.currentTarget.value))
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