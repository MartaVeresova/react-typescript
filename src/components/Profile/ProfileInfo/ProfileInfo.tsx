import React, {ChangeEvent, FC, useState} from 'react'
import s from './ProfileInfo.module.css'
import {ContactsProfileType, ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatusWithHooks} from './ProfileStatusWithHooks';
import userPhoto from './../../../assets/images/user.png'
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';


export const ProfileInfo: FC<PropsType> = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const photo = e.target.files[0]
            savePhoto(photo)
        }
    }

    const onSubmit = (formData: ProfileType) => {
        saveProfile(formData)
            .then(() => {
                setEditMode(false)
            })
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto} alt={''} className={s.mainPhoto}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}


                <ProfileStatusWithHooks
                    status={status}
                    updateUserStatus={updateUserStatus}
                />
            </div>
        </div>
    )
}

const ProfileData: FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {
                isOwner && <div>
                    <button onClick={goToEditMode}>edit</button>
                </div>
            }

            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {
                profile.lookingForAJob &&
                <div>
                    <b>My professional skills</b>: {profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key}
                                contactTitle={key}
                                contactValue={profile.contacts[key as keyof ContactsProfileType]}/>
            })}
            </div>
        </div>
    )
}

export const Contact: FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}>
            <b>{contactTitle}</b>: {contactValue}
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
    saveProfile: (formData: ProfileType) => Promise<any>
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}
type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

