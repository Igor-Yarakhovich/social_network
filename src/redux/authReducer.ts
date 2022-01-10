import {ActionsType, SetUserDataActionType} from "./types";
import {authAPI} from "../api/api";
import {AuthType} from "./profileReducer";
import {Dispatch} from "redux";
import { stopSubmit} from "redux-form";


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
    // isFetching: false,
}


export const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {

    switch (action.type) {
        case "SET-USER-DATA":
            return {
                ...state,
                ...action.data,
            }

        default:
            return state
    }
}

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataActionType => {
    return {
        type: "SET-USER-DATA",
        data: {id, email, login, isAuth}
    }
}

export const getAuthUserData = () => (dispatch: Dispatch<any>) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {

    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {

                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}


