import {Dispatch} from "redux";
import {getAuthUserDataTC} from "./authReducer";

type ActionsType =
    ReturnType<typeof initializedSuccess>

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
    } as const
}

export const initializeApp = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUserDataTC())
    Promise.all([promise]).then(()=>{
        dispatch(initializedSuccess())
    })
}

