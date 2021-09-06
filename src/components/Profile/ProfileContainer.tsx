import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../redux/profileReducer";
import {RootType} from "../../redux/redux-store";
import {UserType} from "../../redux/types";

type ProfileResponseType = {
    userId:number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    contacts:{
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
    profile:null
}

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get<ProfileResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfileAC(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state:RootType):mdtpType => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps,{setUserProfileAC})(ProfileContainer)

