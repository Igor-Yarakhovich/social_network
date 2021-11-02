import {ActionsType,  SetUserDataActionType} from "./types";
import {authAPI} from "../api/api";
import {AuthType} from "./profileReducer";


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
                isAuth: true
            }

        default:
            return state
    }
}


export const setAuthUserData = (id: number, email:string, login:string): SetUserDataActionType => {
    return {
        type: "SET-USER-DATA",
        data:{id, email, login}
    }
}

export const getAuthUserData = () => (dispatch: (action: ActionsType) => void) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login));
            }
        })
}


