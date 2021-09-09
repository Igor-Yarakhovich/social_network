import {ActionsType, AuthType, SetUserDataActionType} from "./types";


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


