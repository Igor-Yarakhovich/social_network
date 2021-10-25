import React from 'react';
import styles from "./UsersAPIComponent.module.css";
import UserPhoto from "../../assets/images/UserPhoto.png";
import {UserType} from "../../redux/types";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    users: Array<UserType>
    unfollow: (id: number) => void
    follow: (id: number) => void
    followingInProgress: number[]
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div className={styles.numberUserPage}>
            {pages.map(p => {
                return <span className={(props.currentPage === p) ? styles.selectedPage : styles.numberPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}
                         </span>
            })}
        </div>
        {
            props.users.map(u => <div className={styles.UserPage} key={u.id}>
                    <span>
                        <div >
                            <NavLink to={'/Profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : UserPhoto}
                                 className={styles.userPhoto} alt={'#'}/>
                            </NavLink>
                        </div>
                        <div className={styles.followUnfollow}>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.unfollow(u.id)
                                          }}>UnFollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.follow(u.id)
                                          }}>Follow</button>}
                        </div>
                    </span>
                <span >
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
            </div>)
        }
    </div>
}