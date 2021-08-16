import {ActionsType, ChangeNewMessageType, MessagesPageType, NewMessageType} from "./types";
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

export const messagesReducer = (state: MessagesPageType = initialState, action: ActionsType): MessagesPageType => {
    switch (action.type) {
        case "NEW-MESSAGE":
            return {
                ...state,
                dialogsData: [...state.dialogsData,
                    {text: state.newMessageText, id: v1()}
                ],
                newMessageText: ''
            }

        case "CHANGE-NEW-MESSAGE":
            return {
                ...state,
                newMessageText: action.newMessage
            }
        default:
            return state
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