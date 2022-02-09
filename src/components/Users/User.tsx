import React from 'react';
import styles from "./UsersAPIComponent.module.css";
import UserPhoto from "../../assets/images/UserAvatar.png";
import {UserType} from "./UsersContainer";
import {NavLink} from "react-router-dom";
import SuperButton from "../../assets/superButton/SuperButton";

type UserPropsType = {
    user: UserType
    unfollow: (id: number) => void
    follow: (id: number) => void
    followingInProgress: number[]
}

export const User = ({user, followingInProgress, unfollow, follow}: UserPropsType) => {


    return <div>
        <div className={styles.userContainer}>
            <div>
                <NavLink to={'/Profile/' + user.id}>
                    <img src={user.photos.small != null ? user.photos.small : UserPhoto}
                         className={styles.userPhoto} alt={'#'}/>
                </NavLink>
            </div>
            <div className={styles.userContent}>
                <div className={styles.value}>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div className={styles.followUnfollow}>
                    {user.followed
                        ? <SuperButton disabled={followingInProgress.some(id => id === user.id)}
                                       onClick={() => {
                                           unfollow(user.id)
                                       }}>UnFollow</SuperButton>
                        : <SuperButton disabled={followingInProgress.some(id => id === user.id)}
                                       onClick={() => {
                                           follow(user.id)
                                       }}>Follow</SuperButton>}
                </div>
            </div>
        </div>


    </div>

}