export type MessageType = {
    name: string
    id: string
}

export type DialogType = {
    text: string
    id: string
}

export type PostsType = {
    message: string
    id: string
    counts: number
}

export type MessagesPageType = {
    messagesData: Array<MessageType>
    dialogsData: Array<DialogType>
    newMessageText:string
}

export type ProfilePageType = {
    newPostText: string
    postsData: Array<PostsType>
}

export type StateType = {
    messagesPage: MessagesPageType
    profilePage: ProfilePageType

}

