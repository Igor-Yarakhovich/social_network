import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";

type LoginPropsType = {}

export const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

type LoginFormPropsType = {
    handleSubmit: any
}
export const LoginForm = (props: LoginFormPropsType) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'}
                   name={'login'}
                   validate={[required]}
                   component={Input}
            />

        </div>
        <div>
            <Field placeholder={'Password'}
                   name={'password'}
                   validate={[required]}
                   component={Input}
            />

        </div>
        <div>
            <Field component={Input}
                   name={'rememberMe'}
                   type={'checkbox'}/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
