import {
    ActionsType,
    FollowActionType,
    SetCurrentPageActionType,
    SetUsersActionType, setUsersTotalCountActionType, toggleIsFetchingActionType, toggleIsFollowingProgressActionType,
    UnFollowActionType,
    UserType
} from "./types";
import {usersAPI} from "../api/api";

type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

let initialState: UsersPageType = {
    users: [] as Array<UserType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}


export const usersReducer = (state = initialState, action: ActionsType): UsersPageType => {
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
        case "TOGGLE-IS-FOLLOWING-PROGRESS" :
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default:
            return state
    }
}

export const followSuccess = (userId: number): FollowActionType => {
    return {
        type: "FOLLOW",
        userId
    }
}
export const unfollowSuccess = (userId: number): UnFollowActionType => {
    return {
        type: "UNFOLLOW",
        userId
    }
}
export const setUsers = (users: UserType[]): SetUsersActionType => {
    return {
        type: "SET-USERS",
        users
    }
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    }
}
export const setTotalUsersCount = (totalCount: number): setUsersTotalCountActionType => {
    return {
        type: "SET-USERS-TOTAL-COUNT",
        totalCount
    }
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching
    }
}
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): toggleIsFollowingProgressActionType => {
    return {
        type: "TOGGLE-IS-FOLLOWING-PROGRESS",
        isFetching,
        userId
    }
}


export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: (action: ActionsType) => void) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const follow = (userId:number) => {
    return (dispatch: (action: ActionsType) => void) => {
        dispatch(toggleIsFollowingProgress(true,userId))
        usersAPI.followUsers(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}

export const unfollow = (userId:number) => {
    return (dispatch: (action: ActionsType) => void) => {
        dispatch(toggleIsFollowingProgress(true,userId))
        usersAPI.unfollowUsers(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsFollowingProgress(false, userId))
            })
    }
}
