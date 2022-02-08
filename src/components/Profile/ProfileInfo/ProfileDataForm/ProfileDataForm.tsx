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

        <div>
            <SuperButton>save</SuperButton>
        </div>

        {error && <div className={styles.formSummaryError}>
            {error}
        </div>
        }

        <div>
            <b>Full name: </b>
            <Field placeholder={'Full name'}
                   name={'fullName'}
                   validate={[]}
                   component={Input}
            />
        </div>

        <div>
            <b>Looking for a job: </b>
            <Field name={'lookingForaJob'}
                   validate={[]}
                   component={Input}
                   type={'checkbox'}
            />
        </div>

        <div>
            <b>My professional skills: </b>
            <Field placeholder={'My professional skills'}
                   name={'lookingForAJobDescription'}
                   validate={[]}
                   component={Textarea}
            />
        </div>

        <div>
            <b>About me: </b>
            <Field placeholder={'About me'}
                   name={'aboutMe'}
                   validate={[]}
                   component={Textarea}
            />
        </div>

        <div><b>Contacts : </b>{Object.keys(profile.contacts).map((key) => {
                return <div className={p.contact} key={key}>
                    <b>{key}: {
                        <Field placeholder={key}
                               name={'contacts.' + key}
                               validate={[]}
                               component={Input}
                        />
                    }</b>
                </div>
            }
        )}</div>

    </form>
}

const ProfileDataFormReduxForm = reduxForm<ReduxFormType, ProfileDataFormPropsType>({form: 'editProfile'})(ProfileDataForm)
export default ProfileDataFormReduxForm