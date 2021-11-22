import {AddPostActionType, ProfilePageType, SetStatusActionType, SetUserProfileActionType} from "./profileReducer";


export type MessageType = {
    name: string
    id: string
}

export type DialogType = {
    text: string
    id: string
}

export type SidebarType = {}


export type MessagesPageType = {
    messagesData: Array<MessageType>
    dialogsData: Array<DialogType>
    // newMessageText: string
}


export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: string
        large: string
    }
    status: string | null
    followed: boolean

}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: object
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
    photos: {
        small: string
        large: string
    }
}

export type StateType = {
    messagesPage: MessagesPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
}


export type FollowActionType = {
    type: 'FOLLOW'
    userId: number
}

export type UnFollowActionType = {
    type: 'UNFOLLOW'
    userId: number
}

export type SetUsersActionType = {
    type: 'SET-USERS'
    users: UserType[]
}

export type SetCurrentPageActionType = {
    type: "SET-CURRENT-PAGE"
    currentPage: number
}

export type setUsersTotalCountActionType = {
    type: "SET-USERS-TOTAL-COUNT",
    totalCount: number
}


export type toggleIsFetchingActionType = {
    type: "TOGGLE-IS-FETCHING"
    isFetching: boolean
}

export type toggleIsFollowingProgressActionType = {
    type: "TOGGLE-IS-FOLLOWING-PROGRESS",
    isFetching: boolean
    userId: number
}

export type NewMessageType = {
    type: 'NEW-MESSAGE'
    newMessageText: string
}

export type ChangeNewMessageType = {
    type: 'CHANGE-NEW-MESSAGE'
    newMessage: string
}


export type SetUserDataActionType = {
    type: "SET-USER-DATA"
    data: {
        id: null | number
        email: string | null,
        login: string | null,
        isAuth: boolean,
    }
}
export type SetInitialized = {
    type: 'INITIALIZED_SUCCESS'
}

export  type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    changeNewMessage: (newMessage: string) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    AddPostActionType
    | NewMessageType
    | ChangeNewMessageType
    | FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | setUsersTotalCountActionType
    | toggleIsFetchingActionType
    | SetUserProfileActionType
    | SetUserDataActionType
    | toggleIsFollowingProgressActionType
    | SetStatusActionType
    | SetInitialized