import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostPropsType} from './MyPosts/Post/Post';
import {postsData} from '../../index';


export type ProfilePropsType = {
    postsData: Array<PostPropsType>
}


export function Profile(props: ProfilePropsType) {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postsData={postsData}/>
        </div>
    )
}

