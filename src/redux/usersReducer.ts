import {ActionsType, FollowActionType, SetUsersActionType, UnFollowActionType, UsersPageType, UsersType} from "./types";

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
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId: string): FollowActionType => {
    return {
        type: "FOLLOW",
        userId
    }
}

export const unFollowAC = (userId: string): UnFollowActionType => {
    return {
        type: "UNFOLLOW",
        userId
    }
}

export const setUsersAC = (users: UsersType[]): SetUsersActionType => {
    return {
        type: "SET-USERS",
        users
    }
}

