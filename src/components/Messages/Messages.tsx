import React from 'react';
import m from './Messages.module.css'

import {Dialogs} from "./Dialogs/Dialogs";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/types";
import {MessageReduxForm} from "./Message/AddMessageForm";

type MessagesType = {
    messagesData: Array<MessageType>
    dialogsData: Array<DialogType>
    newMessageText: string
    addMessage: (newMessageText: string) => void
    onMessageOnchange: (text: string) => void
    isAuth: boolean
}
export const Messages = (props: MessagesType) => {
    let messageElement = props.messagesData.map((d: MessageType) => <Dialogs key={d.id} name={d.name} id={d.id}/>)
    let dialogElement = props.dialogsData.map((m: DialogType) => <Message key={m.id} text={m.text} id={m.id}/>)

    // const onSubmit = (formData: any) => {
    //     console.log(formData)
    // }
    let addNewMessage = (value: any) => {
        props.addMessage(value.newMessageText)
    }
    return (
        <div className={m.Messages}>
            <div className={m.Messages_text}>
                {messageElement}
            </div>
            <div className={m.Messages_items}>
                {dialogElement}
            </div>
            <MessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}

