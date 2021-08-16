import {v1} from "uuid";
import {StoreType} from "./types";
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {sidebarReducer} from "./sidebarReducer";


export const store: StoreType = {
    _state: {
        messagesPage: {
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
        },

        profilePage: {
            newPostText: '',
            postsData: [
                {message: 'Hi, how are you?', id: v1(), counts: 15},
                {message: "It's my first post", id: v1(), counts: 45},
                {message: 'Yo, Yo!', id: v1(), counts: 15},
                {message: "Hello!", id: v1(), counts: 45}
            ]
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("State changed")
    },
    getState() {
        return this._state
    },

    changeNewMessage(newMessage: string) {
        this._state.messagesPage.newMessageText = newMessage
        this._callSubscriber();
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        console.log(action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        console.log(this._state)
        this._callSubscriber();
    }
}











