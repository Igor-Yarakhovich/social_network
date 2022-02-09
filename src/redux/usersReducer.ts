import {usersAPI} from "../api/api";


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
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


//Action
export const followSuccess = (userId: number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}

export const unfollowSuccess = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId
    } as const
}

export const setUsers = (users: UserType[]) => {
    return {
        type: "SET-USERS",
        users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}

export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: "SET-USERS-TOTAL-COUNT",
        totalCount
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching
    } as const
}

export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: "TOGGLE-IS-FOLLOWING-PROGRESS",
        isFetching,
        userId
    } as const
}


//Thunk
export const requestUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: (action: ActionsType) => void) => {
        dispatch(toggleIsFetching(true))
        try {
            let data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
            dispatch(setCurrentPage(currentPage))
        } catch (error) {
            console.log(error)
        }
    }
}

export const follow = (userId: number) => {
    return async (dispatch: (action: ActionsType) => void) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        try {
            let data = await usersAPI.followUsers(userId)
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        } catch (error) {
            console.log(error)
        }
    }
}

export const unfollow = (userId: number) => {
    return async (dispatch: (action: ActionsType) => void) => {
        dispatch(toggleIsFollowingProgress(true, userId))
        try {
            let data = await usersAPI.unfollowUsers(userId)
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        } catch (error) {
            console.log(error)
        }
    }
}


//Types
type ActionsType = ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleIsFollowingProgress>

type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        small: string
        large: string
    }
    status: string | null
    followed: boolean
}

type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
