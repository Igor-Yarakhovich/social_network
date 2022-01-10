

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

export type NewMessageType = {
    type: 'NEW-MESSAGE'
    newMessageText: string
}

export type ActionsType =
    | NewMessageType