import React from 'react';
import p from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType, StoreType} from "../../redux/types";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type ProfileType = {
    dispatch: (action: ActionsType) => void,
    profilePage: ProfilePageType
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPostsContainer profilePage={props.profilePage} dispatch={props.dispatch}/>

        </div>
    )
}

