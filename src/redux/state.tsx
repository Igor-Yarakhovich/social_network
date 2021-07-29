import {v1} from "uuid";
import {DialogType, PostsType, StateType} from "./types";

export  type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    addPost: () => void
    changeNewText: (newText: string) => void
    newMessage: () => void
    changeNewMessage: (newMessage: string) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
}

export const store: StoreType = {
    _state: {
        messagesPage: {
            messagesData: [
                {name: 'Igor', id: v1()},
                {name: 'Anna', id: v1()},
                {name: 'Maxim', id: v1()},
                {name: 'Vlad', id: v1()}
            ],
            newMessageText: "Hello",
            dialogsData: [
                {text: 'Hello my friend!', id: v1()},
                {text: 'How are you?', id: v1()},
                {text: 'Yo!', id: v1()},
                {text: 'Hello brother', id: v1()}
            ]
        },

        profilePage: {
            newPostText: 'It-incubator',
            postsData: [
                {message: 'Hi, how are you?', id: v1(), counts: 15},
                {message: "It's my first post", id: v1(), counts: 45},
                {message: 'Yo, Yo!', id: v1(), counts: 15},
                {message: "Hello!", id: v1(), counts: 45}
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("State changed")
    },
    addPost() {
        let newPost: PostsType = {
            id: v1(),
            message: this._state.profilePage.newPostText,
            counts: 0
        }

        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''

        this._callSubscriber();
    },
    changeNewText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber();
    },
    newMessage() {
        let newMessage: DialogType = {
            text: this._state.messagesPage.newMessageText,
            id: v1()
        }
        this._state.messagesPage.dialogsData.push(newMessage)
        this._state.messagesPage.newMessageText = ''
        this._callSubscriber();
    },
    changeNewMessage(newMessage: string) {
        this._state.messagesPage.newMessageText = newMessage
        this._callSubscriber();
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    }

}




