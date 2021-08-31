import {
    ActionsType,
    FollowActionType,
    SetCurrentPageActionType,
    SetUsersActionType, setUsersTotalCountActionType, toggleIsFetchingActionType,
    UnFollowActionType,
    UsersPageType,
    UserType
} from "./types";

let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
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
                ...state, users: action.users
            }
        case "SET-CURRENT-PAGE" :
            return {
                ...state, currentPage: action.currentPage
            }
        case "SET-USERS-TOTAL-COUNT" :
            return {
                ...state, totalUsersCount: action.totalCount
            }
        case "TOGGLE-IS-FETCHING" :
            return {
                ...state, isFetching: action.isFetching
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

export const setCurrentPageAC = (currentPage: number): SetCurrentPageActionType => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    }
}

export const setUsersTotalCountAC = (totalCount: number): setUsersTotalCountActionType => {
    return {
        type: "SET-USERS-TOTAL-COUNT",
        totalCount
    }
}
export const toggleIsFetchingAC = (isFetching: boolean): toggleIsFetchingActionType => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching
    }
}

