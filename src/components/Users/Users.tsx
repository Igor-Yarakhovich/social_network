import React from 'react';
import {UsersType} from "../../redux/types";
import styles from './Users.module.css'
import {v1} from "uuid";
import {mdtpType, mstpType} from "./UsersContainer";

// type UsersPropsType = {
//     users: Array<UsersType>
//     follow: (userId: string) => void
//     unfollow: (userId: string) => void
//     setUsers: (users:Array<UsersType>)=>void
// }

type UsersPropsType = mstpType & mdtpType

export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: v1(), photoUrl: 'https://uznayvse.ru/images/celebs/nagiev_medium.jpg',
                    followed: false, fullName: 'Igor', status: 'Anyone can become anyone',
                    location: {city: 'Brest', country: 'Belarus'}
                },
                {
                    id: v1(), photoUrl: 'https://uznayvse.ru/images/celebs/nagiev_medium.jpg',
                    followed: true, fullName: 'Alexander', status: 'I am a policeman',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: v1(), photoUrl: 'https://uznayvse.ru/images/celebs/nagiev_medium.jpg',
                    followed: true, fullName: 'Anna', status: 'I am a beautiful girl',
                    location: {city: 'Brest', country: 'Belarus'}
                },
                {
                    id: v1(), photoUrl: 'https://uznayvse.ru/images/celebs/nagiev_medium.jpg',
                    followed: false, fullName: 'Vladislav', status: 'Serve in the army',
                    location: {city: 'Brest', country: 'Belarus'}
                }
            ]
        )
    }

    // [] - array
    // {} - object

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto}/>
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>

    )
}
