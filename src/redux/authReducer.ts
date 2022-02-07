import {authAPI, securityAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";


export const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {

    switch (action.type) {
        case "SET-USER-DATA":
        case "GET-CAPTCHA-URL-SUCCESS":
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}


//Action
export const setAuthUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: "SET-USER-DATA",
        payload: {id, email, login, isAuth}
    } as const
}

export const getCaptchaUrlSuccessAC = (captchaUrl: string) => {
    return {
        type: "GET-CAPTCHA-URL-SUCCESS",
        payload: {captchaUrl}
    } as const
}


//Thunk
export const getAuthUserDataTC = () => async (dispatch: Dispatch<ActionsType>) => {
    try {
        let response = await authAPI.me();
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserDataAC(id, email, login, true));
        }
    } catch (error) {
        console.log(error)
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string | null) => async (dispatch: Dispatch<any>) => {
    try {
        let response = await authAPI.login(email, password, rememberMe, captcha);
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserDataTC())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrlTC())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    } catch (error) {
        console.log(error)
    }
}

export const getCaptchaUrlTC = () => async (dispatch: Dispatch<ActionsType>) => {
    try {
        let response = await securityAPI.getCaptchaUrl();
        const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccessAC(captchaUrl))
    } catch (error) {
        console.log(error)
    }
}

export const logoutTC = () => async (dispatch: Dispatch) => {
    try {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false));
        }
    } catch (error) {
        console.log(error)
    }
}


//Types
export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: null | string
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

type ActionsType =
    ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof getCaptchaUrlSuccessAC>



