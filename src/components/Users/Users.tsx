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
}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={(props.currentPage === p) ? styles.selectedPage : ''}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}
                         </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/Profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : UserPhoto}
                                 className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                <span>
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