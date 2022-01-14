import React from 'react';
import {UserType} from "../../redux/types";
import {User} from "./User";
import styles  from './UsersAPIComponent.module.css';

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
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages: number[] = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    // let totalUsersCount = useSelector<RootType, number>(state => state.usersPage.totalUsersCount)
    // let currentPage = useSelector<RootType, number>(state => state.usersPage.currentPage)
    // let pageSize = useSelector<RootType, number>(state => state.usersPage.pageSize)

    return <div>
        <div className={styles.numberUserPage}>
            {pages.map(p => {
                return <span key={Math.random()}
                             className={(currentPage === p) ? styles.selectedPage : styles.numberPage}
                             onClick={() => {
                                 onPageChanged(p)
                             }}>{p}
                         </span>
            })}
        </div>
        {/*<Pagination totalUsersCount={totalUsersCount} currentPage={currentPage} pageSize={pageSize}/>*/}

        {
            users.map(u => <User user={u}
                                 follow={follow}
                                 unfollow={unfollow}
                                 followingInProgress={followingInProgress}
                                 key={u.id}
            />)

        }
    </div>
}
