import {ActionsType, FollowActionType, SetUsersActionType, UnFollowActionType, UsersPageType, UserType} from "./types";

let initialState = {
    users: []
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsType): UsersPageType => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET-USERS" :
            debugger
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId: number): FollowActionType => {
    return {
        type: "FOLLOW",
        userId
    }
}

export const unFollowAC = (userId: number): UnFollowActionType => {
    return {
        type: "UNFOLLOW",
        userId
    }
}

export const setUsersAC = (users: UserType[]): SetUsersActionType => {
    return {
        type: "SET-USERS",
        users
    }
}

