import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profileReducer";
import {RootType} from "../../redux/redux-store";
import {Redirect, withRouter} from "react-router";

type ProfileResponseType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    contacts: {
        github: string | null,
        vk: string | null,
        facebook: string | null,
        instagram: string | null,
        twitter: string | null,
        website: string | null,
        youtube: string | null,
        mainLink: string | null,
    }
    photos: {
        small: string | null,
        large: string | null,
    }
}

type mdtpType = {
    getUserProfile: (userId: number) => void
}

type mstpType = {
    profile: null
    isAuth:boolean
}


class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth ) return <Redirect to='/Login'/>
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: RootType): mstpType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WidthUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<mstpType, mdtpType, {}, RootType>(mapStateToProps, {getUserProfile})(WidthUrlDataContainerComponent)

