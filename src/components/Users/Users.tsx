import React from 'react';
import {UserType} from "./UsersContainer";
import {User} from "./User";
import Pagination from "../Pagination/Pagination";
import styles from './UsersAPIComponent.module.css'

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

export const Users = ({
                          users,
                          follow,
                          unfollow,
                          followingInProgress,
                          totalUsersCount,
                          pageSize,
                          currentPage,
                          onPageChanged
                      }: UsersPropsType) => {
    return <div>
        <div className={styles.pagination}>
            <Pagination totalItemsCount={totalUsersCount} currentPage={currentPage} pageSize={pageSize}
                        onPageChanged={onPageChanged} portionSize={10}/>
        </div>
        <div className={styles.usersContainer}>
            {
                users.map(u => <User user={u}
                                     follow={follow}
                                     unfollow={unfollow}
                                     followingInProgress={followingInProgress}
                                     key={u.id}
                />)
            }
        </div>
    </div>
}
