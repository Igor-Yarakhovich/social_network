import React from 'react';
import p from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, ProfilePageType} from "../../redux/types";


type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.postsData}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />

        </div>
    )
}

