import React, {ChangeEvent} from 'react';
import p from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/types";
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

export const ProfileInfo = ({profile, status, updateStatus, isOwner}: ProfileInfoPropsType) => {
    const dispatch = useDispatch()

    if (!profile) {
        return <Preloader/>
    }

    const JobsHandler = () => {
        if (profile) {

            return profile.lookingForAJob
                ? <img alt='' src='https://www.svgrepo.com/show/42745/looking-for-job.svg' width='150px'/>
                : <img alt='' src='https://freesvg.org/img/nmj.png' width='150px'/>
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
            <span>{profile.lookingForAJobDescription}</span>
            <div>{JobsHandler()}</div>
            <ProfileStatusWithHooks status={status}
                                    updateStatus={updateStatus}
            />
        </div>
    )
}
