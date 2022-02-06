import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormControls";
import React, {FormEventHandler} from "react";
import styles from './../common/FormsControls/FormControls.module.css'

type LoginFormPropsType = {
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined
    error: string

}

type LoginPropsType = {
    captchaUrl: string | null
}

export const LoginForm = ({handleSubmit, error, captchaUrl}: LoginFormPropsType & LoginPropsType) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <Field placeholder={'Email'}
                   name={'email'}
                   validate={[required]}
                   component={Input}
            />

        </div>
        <div>
            <Field placeholder={'Password'}
                   name={'password'}
                   type='password'
                   validate={[required]}
                   component={Input}
            />

        </div>
        <div>
            <Field component={Input}
                   name={'rememberMe'}
                   type={'checkbox'}/> remember me
        </div>

        {captchaUrl && <img src={captchaUrl} alt=''/>}

        {
            captchaUrl &&
                <Field placeholder={'Symbols from image'}
                       component={Input}
                       name={'captchaUrl'}
                       validate={[required]}
                />
        }

        {
            error && <div className={styles.formSummaryError}>
                {error}
            </div>
        }

        <div>
            <button>Login</button>
        </div>
    </form>
}

export const LoginReduxForm = reduxForm<LoginFormPropsType, LoginPropsType>({
    form: 'login'
})(LoginForm)