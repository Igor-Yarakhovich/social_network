import React from 'react';
import p from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/types";


type ProfileType = {
    profilePage: ProfilePageType
    addPostCallback: () => void
    changeNewTextCallback:(newText: string) => void
}

export const Profile = (props: ProfileType) => {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.postsData}
                     newPostText={props.profilePage.newPostText}
                     addPostCallback={props.addPostCallback}
                     changeNewTextCallback={props.changeNewTextCallback}
            />

        </div>
    )
}

