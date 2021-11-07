import {v1} from "uuid";
import {profileAPI, usersAPI} from "../api/api";
import {ActionsType} from "./types";

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type AddPostActionType = {
    type: 'ADD-POST'
    newPostText:string
}

export type ProfilePageType = {
    postsData: Array<PostsType>
    profile: null
    status: string
}

export type PostsType = {
    message: string
    id: string
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
        {message: 'Hi, how are you?', id: v1(), counts: 15},
        {message: "It's my first post", id: v1(), counts: 45},
        {message: 'Yo, Yo!', id: v1(), counts: 15},
        {message: "Hello!", id: v1(), counts: 45}
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {

    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                postsData: [...state.postsData,
                    {id: v1(), message: action.newPostText, counts: 0},
                ],
            }
        case "SET-USER-PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "SET-STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const addPostAC = (newPostText:string): AddPostActionType => {
    return {
        type: "ADD-POST",
        newPostText
    }
}

export const setStatusAC = (status: string): SetStatusActionType => {
    return {
        type: "SET-STATUS",
        status
    }
}

export const setUserProfileAC = (profile: null): SetUserProfileActionType => {
    return {
        type: "SET-USER-PROFILE",
        profile
    }
}


export const getUserProfile = (userId: number) => (dispatch: (action: ActionsType) => void) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfileAC(response.data))
    })
}

export const getStatus = (userId: number) => (dispatch: (action: ActionsType) => void) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatusAC(response.data))
    })
}
export const updateStatus = (status: string) => (dispatch: (action: ActionsType) => void) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatusAC(status))
        }
    })
}