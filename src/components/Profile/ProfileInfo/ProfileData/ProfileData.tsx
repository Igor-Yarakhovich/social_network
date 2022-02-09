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

        </div>}
        <div className={p.fullName}>{profile.fullName}</div>

        <div className={p.items}>
            <span className={p.params}>Looking for a job: </span>
            <span className={p.value}>{profile.lookingForAJob ? 'YES' : 'NO'}</span>
        </div>

        {profile.lookingForAJobDescription && <div className={p.items}>
            <span className={p.params}>My professional skills: </span>
            <span className={p.value}>{profile.lookingForAJobDescription}</span>
        </div>}

        <div className={p.items}>
            <span className={p.params}>About me: </span>
            <span className={p.value}>{profile.aboutMe}</span>
        </div>

        <div className={p.items}>
            <span className={p.params}>Contacts : </span>
            <span className={p.value}>{Object.keys(profile.contacts).map((key) => {
                    return <Contact key={key}
                                    contactTitle={key}
                                    contactValue={profile.contacts[key as keyof ContactType]}
                    />
                }
            )}</span></div>
        <div className={p.button}>
        <SuperButton onClick={goToEditMode}>edit</SuperButton>
        </div>
    </div>
}


type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact = ({contactTitle, contactValue}: ContactPropsType) => {
    return <div className={p.contacts}>
        <span className={p.params}>{contactTitle}:</span>
        <span className={p.value}>{contactValue}</span>
    </div>
}