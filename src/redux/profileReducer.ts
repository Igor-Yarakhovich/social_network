import {profileAPI, usersAPI} from "../api/api";

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof deletePostAC>


export type ProfilePageType = {
    postsData: Array<PostsType>
    profile: null
    status: string
}

export type PostsType = {
    message: string
    id: number
    counts: number
}

export type SetUserProfileActionType = {
    type: "SET-USER-PROFILE",
    profile: null
}

export type SetStatusActionType = {
    type: 'SET-STATUS'
    status: string
}

let initialState = {
    postsData: [
        {message: 'Hi, how are you?', id: 1, counts: 15},
        {message: "It's my first post", id: 2, counts: 45},
        {message: 'Yo, Yo!', id: 3, counts: 15},
        {message: "Hello!", id: 4, counts: 45}
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {

    switch (action.type) {
        case "ADD_POST":
            return {
                ...state,
                postsData: [...state.postsData,
                    {id: 5, message: action.newPostText, counts: 0},
                ],
            }
        case "SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "SET_STATUS":
            return {
                ...state,
                status: action.status
            }
        case "DELETE_POST":
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id !== action.postId)
            }
        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD_POST",
        newPostText
    } as const
}

export const setStatusAC = (status: string) => {
    return {
        type: "SET_STATUS",
        status
    } as const
}

export const setUserProfileAC = (profile: null) => {
    return {
        type: "SET_USER_PROFILE",
        profile
    } as const
}

export const deletePostAC = (postId: number) => {
    return {
        type: "DELETE_POST",
        postId
    } as const
}

export const getUserProfileTC = (userId: number) => (dispatch: (action: ActionsType) => void) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data))
        })
}

export const getStatusTC = (userId: number) => (dispatch: (action: ActionsType) => void) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatusAC(response.data))
        })
}
export const updateStatusTC = (status: string) => (dispatch: (action: ActionsType) => void) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
}