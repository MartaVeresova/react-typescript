import React from 'react'
import s from './ProfileInfo.module.css'
import {InitialStateType, ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';

type PropsType= {
    profile: ProfileType | null
}
export function ProfileInfo(props: PropsType) {
    if (!props.profile?.photos) {
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>
            <div>
                <img
                    src={props.profile?.photos.large}/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}

