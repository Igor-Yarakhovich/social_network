import React from 'react';
import styles from "./UsersAPIComponent.module.css";
import UserPhoto from "../../assets/images/UserPhoto.png";
import {UserType} from "../../redux/types";
import {NavLink} from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import {useSelector} from "react-redux";
import {RootType} from "../../redux/redux-store";

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
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    // let pages: number[] = []
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i)
    // }
    let totalUsersCount =useSelector<RootType, number>(state => state.usersPage.totalUsersCount)
    let currentPage =useSelector<RootType, number>(state => state.usersPage.currentPage)
    let pageSize =useSelector<RootType, number>(state => state.usersPage.pageSize)

    return <div>
        {/*<div className={styles.numberUserPage}>*/}
        {/*    {pages.map(p => {*/}
        {/*        return <span key={Math.random()} className={(props.currentPage === p) ? styles.selectedPage : styles.numberPage}*/}
        {/*                     onClick={() => {*/}
        {/*                         props.onPageChanged(p)*/}
        {/*                     }}>{p}*/}
        {/*                 </span>*/}
        {/*    })}*/}
        {/*</div>*/}
        <Pagination totalUsersCount={totalUsersCount} currentPage={currentPage} pageSize={pageSize}/>
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