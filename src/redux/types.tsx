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

export type LocationType = {
    city: string
    country: string
}

export type SidebarType = {}

export type UsersPageType = {
    users:Array<UsersType>
}

export type MessagesPageType = {
    messagesData: Array<MessageType>
    dialogsData: Array<DialogType>
    newMessageText: string
}

export type ProfilePageType = {
    newPostText: string
    postsData: Array<PostsType>
}

export type UsersType = {
    id: string
    followed: boolean
    photoUrl:string
    fullName: string
    status: string
    location: LocationType
}

export type StateType = {
    messagesPage: MessagesPageType
    profilePage: ProfilePageType
    sidebar: SidebarType

}

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type FollowActionType = {
    type: 'FOLLOW'
    userId:string
}

export type UnFollowActionType = {
    type: 'UNFOLLOW'
    userId:string
}

export type SetUsersActionType = {
    type: 'SET-USERS'
    users: UsersType[]
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}


export type NewMessageType = {
    type: 'NEW-MESSAGE'
    newMessageText: string
}

export type ChangeNewMessageType = {
    type: 'CHANGE-NEW-MESSAGE'
    newMessage: string
}

export  type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    changeNewMessage: (newMessage: string) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType | NewMessageType | ChangeNewMessageType |
    FollowActionType | UnFollowActionType | SetUsersActionType