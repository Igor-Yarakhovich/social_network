import React from 'react';
import p from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType, UserType} from "../../redux/types";

type ProfilePropsType = {
    profile:ProfileType
}

export const Profile = (props:ProfilePropsType) => {
    return (
        <div className={p.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer

            />
        </div>
    )
}

