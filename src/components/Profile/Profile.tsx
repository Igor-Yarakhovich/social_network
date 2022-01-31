import React from 'react';
import p from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileInfo/ProfileInfo";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    saveProfile:(profile: ProfileType) => void
    savePhoto:(file:string | Blob) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div className={p.content}>
            <ProfileInfo profile={props.profile}
                         isOwner={props.isOwner}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         saveProfile={props.saveProfile}
                         savePhoto={props.savePhoto}
            />
            <MyPostsContainer

            />
        </div>
    )
}

