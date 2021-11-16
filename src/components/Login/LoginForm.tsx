import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Input} from "../common/FormsControls/FormControls";
import React from "react";

type LoginFormPropsType = {
    handleSubmit: any
}
export const LoginForm = (props: LoginFormPropsType) => {
    return <form onSubmit={props.handleSubmit}>
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
        <div>
            <button>Login</button>
        </div>
    </form>
}

export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)