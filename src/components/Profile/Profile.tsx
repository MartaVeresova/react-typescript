import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageType} from '../../redux/store';


export type ProfilePropsType = {
    stateProfilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}


export function Profile(props: ProfilePropsType) {

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts
                postsData={props.stateProfilePage.postsData}
                newPostText={props.stateProfilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}

