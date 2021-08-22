import React from 'react';
import styles from './Users.module.css'
import {mdtpType, mstpType} from "./UsersContainer";
import axios from 'axios'
import {UserType} from "../../redux/types";
import UserPhoto from "../../assets/images/UserPhoto.png"

type UsersPropsType = mstpType & mdtpType

type UsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

export class Users extends React.Component<UsersPropsType, UsersResponseType> {

    componentDidMount() {
        axios.get<UsersResponseType>('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    render() {
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : UserPhoto}
                                 className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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

        )
    }
}