import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';


export type ProfilePropsType = {
    stateProfilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


export function Profile(props: ProfilePropsType) {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts
                postsData={props.stateProfilePage.postsData}
                addPost={props.addPost}
                newPostText={props.stateProfilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

