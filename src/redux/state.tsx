import {v1} from "uuid";
import {DialogType, PostsType, StateType} from "./types";

let renderEntireTree = () => {
    console.log("State changed")
}

export let state: StateType = {
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
}

export const addPost = () => {
    let newPost: PostsType = {
        id: v1(),
        message: state.profilePage.newPostText,
        counts: 0
    }

    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''

    renderEntireTree();
}

export const changeNewText = (newText: string) => {
    state.profilePage.newPostText = newText
    renderEntireTree();
}


export const newMessage = () => {
    let newMessage: DialogType = {
        text: state.messagesPage.newMessageText,
        id: v1()
    }
    state.messagesPage.dialogsData.push(newMessage)
    state.messagesPage.newMessageText = ''
    renderEntireTree();
}

export const changeNewMessage = (newMessage: string) => {
    state.messagesPage.newMessageText = newMessage
    renderEntireTree();
}

export const subscribe = (observer: () => void) => {
    renderEntireTree = observer;
}



