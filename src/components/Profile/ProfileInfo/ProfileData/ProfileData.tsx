import p from "../ProfileInfo.module.css";
import React from "react";
import {ContactType, ProfileType} from "../ProfileInfo";
import SuperButton from "../../../../assets/superButton/SuperButton";

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

export const ProfileData = ({profile, isOwner, goToEditMode}: ProfileDataPropsType) => {
    return <div>
        {isOwner && <div>
            <SuperButton onClick={goToEditMode}>edit</SuperButton>
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


type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact = ({contactTitle, contactValue}: ContactPropsType) => {
    return <div className={p.contact}><b>{contactTitle}</b> : {contactValue}</div>
}