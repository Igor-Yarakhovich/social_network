import {ActionsType, ChangeNewMessageType, DialogType, MessagesPageType, NewMessageType} from "./types";
import {v1} from "uuid";

let initialState = {
    messagesData: [
        {name: 'Igor', id: v1()},
        {name: 'Anna', id: v1()},
        {name: 'Maxim', id: v1()},
        {name: 'Vlad', id: v1()}
    ],
    newMessageText: '',
    dialogsData: [
        {text: 'Hello my friend!', id: v1()},
        {text: 'How are you?', id: v1()},
        {text: 'Yo!', id: v1()},
        {text: 'Hello brother', id: v1()}
    ]
}

export const messagesReducer = (_state: MessagesPageType = initialState, action: ActionsType): MessagesPageType => {
    switch (action.type) {
        case "NEW-MESSAGE":
            let newMessage: DialogType = {
                text: action.newMessageText,
                id: v1()
            }
            _state.dialogsData.push(newMessage)
            _state.newMessageText = ''
            return _state
        case "CHANGE-NEW-MESSAGE":
            _state.newMessageText = action.newMessage
            return _state
        default:
            return _state
    }
}

export const newMessageAC = (newMessageText: string): NewMessageType => {
    return {
        type: 'NEW-MESSAGE',
        newMessageText: newMessageText
    }
}

export const changeNewMessageTextAC = (newMessage: string): ChangeNewMessageType => {
    return {
        type: 'CHANGE-NEW-MESSAGE',
        newMessage: newMessage
    }
}