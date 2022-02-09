import React, {FormEventHandler} from "react";
import {ProfileType} from "../ProfileInfo";
import {Input, Textarea} from "../../../common/FormsControls/FormControls";
import {Field, reduxForm} from "redux-form";
import p from '../ProfileInfo.module.css'
import styles from "../../../common/FormsControls/FormControls.module.css";
import SuperButton from "../../../../assets/superButton/SuperButton";

type ReduxFormType = {
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined
    error: string
}

type ProfileDataFormPropsType = {
    initialValues: ProfileType
    profile: ProfileType
}

const ProfileDataForm = (props: ProfileDataFormPropsType & ReduxFormType) => {

    const {handleSubmit, error, profile} = props

    return <form onSubmit={handleSubmit}>

        {error && <div className={styles.formSummaryError}>
            {error}
        </div>
        }

        <div className={p.items}>
            <span className={p.params}>Full name: </span>
            <span className={p.value}>
                <Field placeholder={'Full name'}
                       name={'fullName'}
                       validate={[]}
                       component={Input}
                />
            </span>
        </div>

        <div className={p.items}>
            <span className={p.params}>Looking for a job: </span>
            <span className={p.value}>
                <Field name={'lookingForaJob'}
                       validate={[]}
                       component={Input}
                       type={'checkbox'}
                />
            </span>
        </div>

        <div className={p.items}>
            <span className={p.params}>My professional skills: </span>
            <span className={p.value}>
                <Field placeholder={'My professional skills'}
                   name={'lookingForAJobDescription'}
                   validate={[]}
                   component={Textarea}
            />
            </span>
        </div>

        <div className={p.items}>
            <span className={p.params}>About me: </span>
            <span className={p.value}>
                <Field placeholder={'About me'}
                   name={'aboutMe'}
                   validate={[]}
                   component={Textarea}
            />
            </span>
        </div>

        <div className={p.items}>
            <span className={p.params}>Contacts : </span>{Object.keys(profile.contacts).map((key) => {
                return <div className={p.contact} key={key}>
                    <span className={p.params}>{key}: {
                        <Field placeholder={key}
                               name={'contacts.' + key}
                               validate={[]}
                               component={Input}
                        />
                    }</span>
                </div>
            }
        )}</div>

        <div className={p.button}>
            <SuperButton >save</SuperButton>
        </div>

    </form>
}

const ProfileDataFormReduxForm = reduxForm<ReduxFormType, ProfileDataFormPropsType>({form: 'editProfile'})(ProfileDataForm)
export default ProfileDataFormReduxForm