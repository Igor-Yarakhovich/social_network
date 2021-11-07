import React from 'react';
import m from './Messages.module.css'

import {Dialogs} from "./Dialogs/Dialogs";
import {Message} from "./Message/Message";
import {DialogType, MessageType} from "../../redux/types";
import {Field, reduxForm} from "redux-form";

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

type MessageFormPropsType = {
    handleSubmit: any
}
export const MessageForm = (props: MessageFormPropsType) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component='textarea' name='newMessageText' placeholder='Enter your message'/>
        </div>
        <div>
            <button>Send</button>
        </div>
    </form>
}

export const MessageReduxForm = reduxForm({
    form: 'messageForm'
})(MessageForm)