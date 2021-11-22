import {ActionsType} from "./types";
import {Dispatch} from "redux";
import {getAuthUserData} from "./authReducer";

type AppType = {
    initialized: boolean
}

let initialState = {
    initialized: false
}


export const appReducer = (state: AppType = initialState, action: ActionsType): AppType => {

    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state, initialized: true
            }

        default:
            return state
    }
}

export const initializedSuccess = () => {
    return {
        type: "INITIALIZED_SUCCESS",
    }
}

export const initializeApp = () => (dispatch: Dispatch<any>) => {

    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(()=>{
        dispatch(initializedSuccess())
    })
}

