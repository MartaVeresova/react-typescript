import React from 'react'
import s from './ProfileInfo.module.css'
import {ProfileType} from '../../../redux/profile-reducer';
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
                    src=''/>
            </div>
            <div className={s.descriptionBlock}>
                <img
                    src={props.profile?.photos.large}/>
                ava+description
            </div>
        </div>
    )
}

