import React from 'react';
import userPhoto from '../../assets/images/user.png';
import s from './Users.module.css';
import {UsersType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UsersType>
    follow: (userId: string) => void
    unFollow: (userId: string) => void
}

export function Users(props: UsersPropsType) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : ''}
                                 onClick={(e) => props.onPageChanged(p)}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => {
                        const onClickFollow = () => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '56cc9d09-6ac5-48a7-98d1-6f7ea21ef704',
                                },
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                })
                        }
                        const onClickUnFollow = () => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '56cc9d09-6ac5-48a7-98d1-6f7ea21ef704',
                                },
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unFollow(u.id)
                                    }
                                })
                        }

                        return (
                            <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                     className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={onClickUnFollow}>unFollow</button>
                                : <button onClick={onClickFollow}>follow</button>}
                        </div>
                    </span>
                                <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                                <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                    </span>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}