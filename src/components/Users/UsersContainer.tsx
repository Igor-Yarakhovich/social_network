import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {ActionsType, UsersType} from "../../redux/types";
import {RootType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC} from "../../redux/usersReducer";

export type mstpType = {
    users: Array<UsersType>
}

export type mdtpType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UsersType[]) => void
}

let mapStateToProps = (state: RootType): mstpType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void): mdtpType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect<mstpType, mdtpType, {}, RootType>(mapStateToProps, mapDispatchToProps)(Users)
