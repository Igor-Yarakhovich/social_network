import {Dispatch} from "redux";
import {getAuthUserDataTC} from "./authReducer";


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


//Action
export const initializedSuccess = () => {
    return {
        type: "INITIALIZED_SUCCESS",
    } as const
}

//Thunk
export const initializeApp = () => (dispatch: Dispatch<any>) => {
    try {
        let promise = dispatch(getAuthUserDataTC())
        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess())
        })
    } catch (error) {
        console.log(error)
    }
}


//Types
type ActionsType =
    ReturnType<typeof initializedSuccess>

type AppType = {
    initialized: boolean
}

let initialState = {
    initialized: false
}

