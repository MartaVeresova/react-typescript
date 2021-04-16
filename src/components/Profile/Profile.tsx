import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostPropsType} from './MyPosts/Post/Post';


export type ProfilePagePropsType = {
    postsData: Array<PostPropsType>
}
export type ProfilePropsType = {
    stateData: ProfilePagePropsType
}


export function Profile(props: ProfilePropsType) {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts postsData={props.stateData.postsData}/>
        </div>
    )
}

