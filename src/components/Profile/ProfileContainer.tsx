import React, {Component, ComponentClass, FunctionComponent, ReactElement} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {RootType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router";
import {ProfileType} from "../../redux/types";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from 'redux'


type mdtpType = {
    getUserProfile: (userId: number) => void
}

type mstpType = {
    profile: ProfileType | null
    isAuth: boolean
}

type PathParams = {
    userId: string | undefined
}
type OwnPropsType = mstpType & mdtpType

type ProfileContainerPropsType = RouteComponentProps<PathParams> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfile(+userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: RootType): mstpType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

export default compose<ComponentClass>(
    connect<mstpType, mdtpType, {}, RootType>(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


