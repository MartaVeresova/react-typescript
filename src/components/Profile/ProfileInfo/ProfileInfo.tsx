import React, {FC} from 'react'
import s from './ProfileInfo.module.css'
import {ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';


export const ProfileInfo: FC<PropsType> = ({profile, status, updateUserStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt={''}/>
            </div>
            <div className={s.descriptionBlock}>
                <img
                    src={profile.photos.large} alt={''}/>
                <ProfileStatusWithHooks
                    status={status}
                    updateUserStatus={updateUserStatus}
                />
            </div>
        </div>
    )
}


//types
type PropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: (status: string) => void
}

