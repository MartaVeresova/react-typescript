import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'

export function Users(props: UsersPropsType) {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)

                    /*props.setUsers(
                        [
                            {
                                id: v1(),
                                followed: false,
                                fullName: 'Marta',
                                status: 'I am a boss',
                                location: {city: 'Minsk', country: 'Belarus'},
                                photoUrl: 'https://i.pinimg.com/564x/30/09/6b/30096bd46067ef042d16e5a67fff796b.jpg'
                            },
                            {
                                id: v1(),
                                followed: true,
                                fullName: 'Katya',
                                status: 'I am a boss too',
                                location: {city: 'Moscow', country: 'Russia'},
                                photoUrl: 'https://avatars.mds.yandex.net/get-zen_doc/1583391/pub_5d6cd445fc69ab00aeeb8ab1_5d6cd44ffebcd400af21fde3/scale_1200'
                            },
                            {
                                id: v1(),
                                followed: false,
                                fullName: 'Oleg',
                                status: 'I am a boss too',
                                location: {city: 'Kiev', country: 'Ukraine'},
                                photoUrl: 'https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg'
                            },
                        ] as Array<UsersType>
                    )*/
                })
        }
    }


    return (
        <div>
            <button onClick={getUsers}>get users</button>
            {
                props.users.map(u => {
                        const onClickFollow = () => props.follow(u.id)
                        const onClickUnFollow = () => props.unFollow(u.id)

                        return (
                            <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto}/>
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