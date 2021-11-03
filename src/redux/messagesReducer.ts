import {ActionsType, MessagesPageType, NewMessageType} from "./types";
import {v1} from "uuid";

let initialState = {
    messagesData: [
        {name: 'Igor', id: v1()},
        {name: 'Anna', id: v1()},
        {name: 'Maxim', id: v1()},
        {name: 'Vlad', id: v1()}
    ],
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
                    {text: action.newMessageText, id: v1()}
                ]
            }
        default:
            return state
    }
}

export const newMessageAC = (newMessageText: string): NewMessageType => {
    return {
        type: 'NEW-MESSAGE',
        newMessageText
    }
}
