import React, {FC} from 'react';
import {UsersType} from '../../redux/users-reducer';
import {Pagination} from '../common/pagination/Pagination';
import {User} from './User';


export const Users: FC<UsersPropsType> = (props) => {

    const {totalUsersCount, users, currentPage, pageSize, followingInProgress, follow, onPageChanged, unfollow} = props

    return (
        <div>
            <Pagination currentPage={currentPage}
                        onPageChanged={onPageChanged}
                        pageSize={pageSize}
                        totalItemsCount={totalUsersCount}
                        portionSize={10}/>
    <div>
        {
            users.map(user => <User key={user.id}
                                    user={user}
                                    followingInProgress={followingInProgress}
                                    follow={follow}
                                    unfollow={unfollow}/>)
        }
    </div>
</div>
)
}


//types
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