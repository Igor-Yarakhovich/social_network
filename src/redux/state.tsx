import {v1} from "uuid";
import {
    AddPostActionType, ChangeNewMessageType,
    DialogType,
    NewMessageType,
    PostsType,
    StoreType,
    UpdateNewPostTextActionType
} from "./types";


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
    _callSubscriber() {
        console.log("State changed")
    },
    getState() {
        return this._state
    },

    // addPost() {
    //     let newPost: PostsType = {
    //         id: v1(),
    //         message: this._state.profilePage.newPostText,
    //         counts: 0
    //     }
    //
    //     this._state.profilePage.postsData.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //
    //     this._callSubscriber();
    // },
    // changeNewText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     this._callSubscriber();
    // },
    // newMessage() {
    //     let newMessage: DialogType = {
    //         text: this._state.messagesPage.newMessageText,
    //         id: v1()
    //     }
    //     this._state.messagesPage.dialogsData.push(newMessage)
    //     this._state.messagesPage.newMessageText = ''
    //     this._callSubscriber();
    // },
    changeNewMessage(newMessage: string) {
        this._state.messagesPage.newMessageText = newMessage
        this._callSubscriber();
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: PostsType = {
                id: v1(),
                message: action.newPostText,
                counts: 0
            }

            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''

            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber();
        } else if (action.type === 'NEW-MESSAGE') {
            let newMessage: DialogType = {
                text: action.newMessageText,
                id: v1()
            }
            this._state.messagesPage.dialogsData.push(newMessage)
            this._state.messagesPage.newMessageText = ''
            this._callSubscriber();
        } else if (action.type === 'CHANGE-NEW-MESSAGE') {
            this._state.messagesPage.newMessageText = action.newMessage
            this._callSubscriber();
        }
    }

}

export const addPostAC = (newPostText: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    }
}

export const updateNewPosTextAC = (newText: string): UpdateNewPostTextActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
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





