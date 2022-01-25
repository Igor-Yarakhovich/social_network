import React, {ChangeEvent} from 'react';
import p from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/types";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import UserPhoto from "../../../assets/images/UserAvatar.png";
import {savePhotoTC} from "../../../redux/profileReducer";
import {useDispatch} from "react-redux";
import JobSearch from '../../../assets/images/Jobs-search.png'
import NotMyJob from '../../../assets/images/not-my-job.jpg'

type ProfileInfoPropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

export const ProfileInfo = ({profile, status, updateStatus, isOwner}: ProfileInfoPropsType) => {
    const dispatch = useDispatch()

    if (!profile) {
        return <Preloader/>
    }

    const JobsHandler = () => {
        if (profile) {

            return profile.lookingForAJob
                ? <img alt='' src={JobSearch} width='150px'/>
                : <img alt='' src={NotMyJob} width='150px'/>
        }
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
            <div className={p.fullName}>{profile.fullName}</div>
            <div>
                <b>Looking for a job: </b> {profile.lookingForAJob ? 'YES' : 'NO'}
            </div>
            <div>
                <b>About me: </b>{profile.aboutMe}
            </div>
            {profile.lookingForAJobDescription && <div>
                <b>My professional skills: </b>{profile.lookingForAJobDescription}
            </div>}
            <div><b>Contacts : </b>{Object.keys(profile.contacts)}</div>
            <ProfileStatusWithHooks status={status}
                                    updateStatus={updateStatus}
            />
        </div>
    )
}

const Contact = (contactTitle: string, contactValue: string) => {
    return <div><b>{contactTitle} : </b>{contactValue}</div>
}
