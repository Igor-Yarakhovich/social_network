import React from 'react';
import {UserType} from "./UsersContainer";
import {User} from "./User";
import Pagination from "../Pagination/Pagination";

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
        <Pagination totalItemsCount={totalUsersCount} currentPage={currentPage} pageSize={pageSize}
                    onPageChanged={onPageChanged} portionSize={10}/>
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
