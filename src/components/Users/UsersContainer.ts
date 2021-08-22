import {connect} from "react-redux";
import {Users} from "./Users";
import {ActionsType, UserType} from "../../redux/types";
import {RootType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC} from "../../redux/usersReducer";

export type mstpType = {
    users: Array<UserType>
}

export type mdtpType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
}

let mapStateToProps = (state: RootType): mstpType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsType) => void): mdtpType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect<mstpType, mdtpType, {}, RootType>(mapStateToProps, mapDispatchToProps)(Users)
