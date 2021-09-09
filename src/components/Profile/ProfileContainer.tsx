import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profileReducer";
import {RootType} from "../../redux/redux-store";
import {withRouter} from "react-router";

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
    setUserProfileAC: (profile: null) => void
}

type mstpType = {
    profile: null
}


class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get<ProfileResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfileAC(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: RootType): mstpType => ({
    profile: state.profilePage.profile
})

let WidthUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<mstpType, mdtpType, {}, RootType>(mapStateToProps, {setUserProfileAC})(WidthUrlDataContainerComponent)

