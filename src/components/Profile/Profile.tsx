import React, {FC} from 'react'
import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';


export const Profile: FC<PropsType> = ({profile, updateUserStatus, status, isOwner, savePhoto}) => {
    return (
        <div className={s.profile}>
            <ProfileInfo
                profile={profile}
                status={status}
                updateUserStatus={updateUserStatus}
                isOwner={isOwner}
                savePhoto={savePhoto}
            />
            <MyPostsContainer/>
        </div>
    )
}


//types
type PropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
}

