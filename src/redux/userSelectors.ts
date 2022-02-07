import {RootType} from "./store";
import {createSelector} from 'reselect'


const getUsers = (state: RootType) => {
    return state.usersPage.users
}

export const getUsersSuper = createSelector(getUsers, users => {
    return users.filter(() => true)
})

export const getPageSize = (state: RootType) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: RootType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: RootType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: RootType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: RootType) => {
    return state.usersPage.followingInProgress
}