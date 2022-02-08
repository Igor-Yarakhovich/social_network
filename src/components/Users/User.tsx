import React from 'react';
import styles from "./UsersAPIComponent.module.css";
import UserPhoto from "../../assets/images/UserAvatar.png";
import {UserType} from "./UsersContainer";
import {NavLink} from "react-router-dom";

type UserPropsType = {
    user: UserType
    unfollow: (id: number) => void
    follow: (id: number) => void
    followingInProgress: number[]
}

export const User = ({user, followingInProgress, unfollow, follow}: UserPropsType) => {


    return <div>
                    <span>
                        <div>
                            <NavLink to={'/Profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : UserPhoto}
                                 className={styles.userPhoto} alt={'#'}/>
                            </NavLink>
                        </div>
                        <div className={styles.followUnfollow}>
                            {user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              unfollow(user.id)
                                          }}>UnFollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              follow(user.id)
                                          }}>Follow</button>}
                        </div>
                    </span>
        <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
    </div>

}