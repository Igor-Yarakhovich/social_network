import React, {ChangeEvent, useState} from 'react';
import p from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import UserPhoto from "../../../assets/images/UserAvatar.png";
import ProfileDataForm from './ProfileDataForm/ProfileDataForm'
import {ProfileData} from './ProfileData/ProfileData'

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    saveProfile: (profile: ProfileType) => void
    savePhoto: (file: string | Blob) => void
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactType
    aboutMe: string
    photos: {
        small: string
        large: string
    }
}

export type ContactType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export const ProfileInfo = ({profile, status, updateStatus, isOwner, saveProfile, savePhoto}: ProfileInfoPropsType) => {


    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onSubmit = async (formData: any) => {
        saveProfile(formData)
        await setEditMode(false)
    }


    const onMainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        if (files) {
            savePhoto(files[0])
        }
    }
    return (
        <div className={p.content}>
            <img alt='' src={profile.photos.large || UserPhoto}/>

            {isOwner && <input type='file' onChange={onMainPhotoSelected}/>}
            {editMode

                ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile}/>
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => setEditMode(true)}/>}

            <ProfileStatusWithHooks status={status}
                                    updateStatus={updateStatus}
            />
        </div>

    )
}



