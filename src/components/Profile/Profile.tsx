import React from 'react'
import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {StoreType} from '../../redux/store';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

export type ProfilePropsType = {
    store: StoreType
}


export function Profile(props: ProfilePropsType) {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    )
}

