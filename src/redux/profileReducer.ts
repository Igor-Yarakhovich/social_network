import {profileAPI, usersAPI} from "../api/api";
import {ProfileType} from "../components/Profile/ProfileInfo/ProfileInfo";
import {FormAction, stopSubmit} from "redux-form";
import {ThunkDispatch} from "redux-thunk";
import {RootType} from "./redux-store";

type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof savePhotoSuccess>
    | ReturnType<typeof setEditMode>


export type ProfilePageType = {
    postsData: Array<PostsType>
    profile: any
    status: string
    value: boolean
}

export type PostsType = {
    message: string
    id: number
    counts: number
}


let initialState = {
    postsData: [
        {message: 'Hi, how are you?', id: 1, counts: 15},
        {message: "It's my first post", id: 2, counts: 45},
        {message: 'Yo, Yo!', id: 3, counts: 15},
        {message: "Hello!", id: 4, counts: 45}
    ],
    profile: null,
    status: '',
    value: false
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
        case "SAVE_PHOTO_SUCCESS":
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case "SET_EDIT_MODE":
            return {
                ...state,
                value: action.value
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

export const setUserProfileAC = (profile: ProfileType | null) => {
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

export const savePhotoSuccess = (photos: string | Blob) => {
    return {
        type: "SAVE_PHOTO_SUCCESS",
        photos
    } as const
}

export const setEditMode = (value: boolean) => {
    return {
        type: "SET_EDIT_MODE",
        value
    } as const
}


export const getUserProfileTC = (userId: number) => async (dispatch: (action: ActionsType) => void) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfileAC(response.data))
}

export const getStatusTC = (userId: number) => async (dispatch: (action: ActionsType) => void) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(response.data))
}

export const updateStatusTC = (status: string) => async (dispatch: (action: ActionsType) => void) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}

export const savePhotoTC = (file: any) => async (dispatch: (action: ActionsType) => void) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfileTC = (profile: ProfileType) =>
    async (dispatch: ThunkDispatch<RootType, unknown, ActionsType | FormAction>, getState: () => RootType) => {
        try {
            const userId = getState().auth.id;
            let response = await profileAPI.saveProfile(profile)
            if (response.data.resultCode === 0) {
                if (userId)
                    await dispatch(getUserProfileTC(userId))
                dispatch(setEditMode(false))
            } else {
                dispatch(stopSubmit("editProfile", {_error: response.data.messages[0]}));
                return Promise.reject(response.data.messages[0]);
            }
        } catch (err) {
            return Promise.reject(err);
        }
    }