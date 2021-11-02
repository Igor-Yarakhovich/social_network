import React, {ComponentClass} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {RootType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router";
import {ProfileType} from "../../redux/types";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from 'redux'


type mdtpType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void

}

type mstpType = {
    profile: ProfileType | null
    isAuth: boolean
    status: string
}

type PathParams = {
    userId: string
}
type OwnPropsType = mstpType & mdtpType

type ProfileContainerPropsType = RouteComponentProps<PathParams> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "18918"
        }
        this.props.getUserProfile(+userId)
        this.props.getStatus(+userId)


    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        )
    }
}

let mapStateToProps = (state: RootType): mstpType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status
})

export default compose<ComponentClass>(
    connect<mstpType, mdtpType, {}, RootType>(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


