import React, {ChangeEvent, useState} from 'react';
import p from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import UserPhoto from "../../../assets/images/UserAvatar.png";
import {savePhotoTC} from "../../../redux/profileReducer";
import {useDispatch} from "react-redux";

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
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

export const ProfileInfo = ({profile, status, updateStatus, isOwner}: ProfileInfoPropsType) => {
    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        if (files) {
            dispatch(savePhotoTC(files[0]))
        }
    }

    return (
        <div className={p.content}>
            <img alt='' src={profile.photos.large || UserPhoto}/>

            {!isOwner && <input type='file' onChange={onMainPhotoSelected}/>}
            {editMode
                ? <ProfileDataForm profile={profile}/>
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={()=>setEditMode(true)}/>}


            <ProfileStatusWithHooks status={status}
                                    updateStatus={updateStatus}
            />
        </div>

    )
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData = ({profile, isOwner, goToEditMode}: ProfileDataPropsType) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div className={p.fullName}>{profile.fullName}</div>

        <div>
            <b>Looking for a job: </b> {profile.lookingForAJob ? 'YES' : 'NO'}
        </div>

        {profile.lookingForAJobDescription && <div>
            <b>My professional skills: </b>{profile.lookingForAJobDescription}
        </div>}

        <div>
            <b>About me: </b>{profile.aboutMe}
        </div>

        <div><b>Contacts : </b>{Object.keys(profile.contacts).map((key) => {
                return <Contact key={key} contactTitle={key}
                                contactValue={profile.contacts[key as keyof ContactType]}
                />
            }
        )}</div>
    </div>
}

type ProfileDataFormPropsType = {
    profile: ProfileType
}

const ProfileDataForm = ({profile}: ProfileDataFormPropsType) => {
    return <div>
        Form
    </div>
}


type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact = ({contactTitle, contactValue}: ContactPropsType) => {
    return <div className={p.contact}><b>{contactTitle}</b> : {contactValue}</div>
}
