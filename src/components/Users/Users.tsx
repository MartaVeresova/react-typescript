import React from 'react';
import userPhoto from '../../assets/images/user.png';
import s from './Users.module.css';
import axios from 'axios';
import {UsersPropsType} from './UsersContainer';

export class Users extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => {
                            const onClickFollow = () => this.props.follow(u.id)
                            const onClickUnFollow = () => this.props.unFollow(u.id)

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
}