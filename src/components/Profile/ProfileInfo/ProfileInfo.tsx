import React from 'react'
import s from './ProfileInfo.module.css'
import {ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';

type PropsType= {
    profile: ProfileType | null
}
export function ProfileInfo(props: PropsType) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>
            <div>
                <img
                    src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'/>
            </div>
            <div className={s.descriptionBlock}>
                <img
                    src={props.profile.photos.large}/>
                ava+description
            </div>
        </div>
    )
}

