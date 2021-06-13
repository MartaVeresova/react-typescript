import React from 'react';
import userPhoto from '../../assets/images/user.png';
import s from './Users.module.css';
import {UsersType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import {followAPI, unfollowAPI} from '../../api/api';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UsersType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    followingInProgress: string[]
    toggleIsFollowingProgress: (isFetching: boolean, userId: string) => void
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
                            props.toggleIsFollowingProgress(true, u.id)

                            followAPI.followUsers(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleIsFollowingProgress(false, u.id)
                                })
                        }
                        const onClickUnFollow = () => {
                            props.toggleIsFollowingProgress(true, u.id)
                            unfollowAPI.unfollowUsers(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.toggleIsFollowingProgress(false, u.id)
                                })
                        }

                        return (
                            <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                     className={s.userPhoto} alt={''}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ?
                                <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={onClickUnFollow}>unFollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={onClickFollow}>follow</button>}
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
                    })
            }
        </div>
    )
}