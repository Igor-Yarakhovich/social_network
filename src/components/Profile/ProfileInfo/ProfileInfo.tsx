import React, {ChangeEvent} from 'react';
import p from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import UserPhoto from "../../../assets/images/UserAvatar.png";
import ProfileDataForm from './ProfileDataForm/ProfileDataForm'
import {ProfileData} from './ProfileData/ProfileData'
import {setEditMode} from "../../../redux/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootType} from "../../../redux/store";

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
    const editMode = useSelector<RootType, boolean>(state => state.profilePage.value)

    const dispatch = useDispatch()

    if (!profile) {
        return <Preloader/>
    }

    const onSubmit = (formData: any) => {
        saveProfile(formData)
    }

    const editModeFalseHandler = () => dispatch(setEditMode(true))

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
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={editModeFalseHandler}/>}

            <ProfileStatusWithHooks status={status}
                                    updateStatus={updateStatus}
            />
        </div>

    )
}



