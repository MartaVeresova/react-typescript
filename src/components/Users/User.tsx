import React, {FC} from 'react';
import userPhoto from '../../assets/images/user.png';
import s from './Users.module.css';
import {UsersType} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';


export const User: FC<UserPropsType> = (props) => {

    const {user, followingInProgress, follow, unfollow} = props

    const onClickFollow = () => follow(user.id)
    const onClickUnFollow = () => unfollow(user.id)

    return (
        <>
            <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small !== null ? user.photos.small : userPhoto}
                                     className={s.userPhoto} alt={''}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                user.followed
                                    ?
                                    <button disabled={followingInProgress.some(id => id === user.id)}
                                            onClick={onClickUnFollow}>unFollow</button>
                                    : <button disabled={followingInProgress.some(id => id === user.id)}
                                              onClick={onClickFollow}>follow</button>
                            }
                        </div>
                    </span>
            <span>
                        <div>
                            {user.name}
                        </div>
                        <div>
                            {user.status}
                        </div>
                    </span>
            <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                    </span>
        </>
    )
}


//types
type UserPropsType = {
    user: UsersType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    followingInProgress: string[]
}