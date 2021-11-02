import React from 'react';
import p from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/types";
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile:ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo = (props:ProfileInfoPropsType) => {
    if (!props.profile){
        return <Preloader/>
    }

    const JobsHandler = ()=> {
        if( props.profile){

        return props.profile.lookingForAJob
            ? <img src='https://www.svgrepo.com/show/42745/looking-for-job.svg' width='150px'/>
            : <img src='https://freesvg.org/img/nmj.png' width='150px'/>
        }
    }
    return (
        <div className={p.content}>
            <img src={props.profile.photos.large}/>
            <div className={p.fullName}>{props.profile.fullName}</div>
            <span>{props.profile.lookingForAJobDescription}</span>
            <div>{JobsHandler()}</div>
            <ProfileStatus status={props.status}
                           updateStatus={props.updateStatus}
            />
        </div>
    )
}
