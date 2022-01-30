import React, {ComponentClass} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatusTC, getUserProfileTC, savePhotoTC, setStatusAC, updateStatusTC} from "../../redux/profileReducer";
import {RootType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router";
import {ProfileType} from "./ProfileInfo/ProfileInfo";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from 'redux'


type mdtpType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    setStatusAC: (status: string) => void
    savePhoto:(file:string | Blob) => void
}

type mstpType = {
    profile: ProfileType | null
    isAuth: boolean
    status: string
    authorizedUserId: number | null
}

type PathParams = {
    userId: any
}
type OwnPropsType = mstpType & mdtpType

type ProfileContainerPropsType = RouteComponentProps<PathParams> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
            />
        )
    }
}

let mapStateToProps = (state: RootType): mstpType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id
})

export default compose<ComponentClass>(
    connect<mstpType, mdtpType, {}, RootType>(mapStateToProps, {
        getUserProfile: getUserProfileTC,
        getStatus: getStatusTC,
        updateStatus: updateStatusTC,
        setStatusAC,
        savePhoto : savePhotoTC
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)


