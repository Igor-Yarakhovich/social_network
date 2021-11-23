import {connect} from "react-redux";
import {UserType} from "../../redux/types";
import {RootType} from "../../redux/redux-store";
import {follow, requestUsers, setCurrentPage, toggleIsFollowingProgress, unfollow} from "../../redux/usersReducer";
import React, {ComponentClass} from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSuper
} from "../../redux/userSelectors";

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
    console.log(state.usersPage.users)
    return {
        users: getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<ComponentClass>(
    connect(mapStateToProps, {
            follow,
            unfollow,
            setCurrentPage,
            toggleIsFollowingProgress,
            getUsers:requestUsers
        }
    ),
    withRouter,
    withAuthRedirect
)(UsersContainer)


