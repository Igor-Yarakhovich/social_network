import {connect} from "react-redux";
import {UserType} from "../../redux/types";
import {RootType} from "../../redux/redux-store";
import {follow, getUsers, setCurrentPage, toggleIsFollowingProgress, unfollow} from "../../redux/usersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

export type mstpType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

    followingInProgress: Array<number>
}

export type mdtpType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsFollowingProgress: (followingInProgress: boolean, id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

type UsersPropsType = mstpType & mdtpType

type UsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

export class UsersContainer extends React.Component<UsersPropsType, UsersResponseType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: RootType): mstpType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect<mstpType, mdtpType, {}, RootType>(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleIsFollowingProgress,
        getUsers
    }
)(UsersContainer)
