import React from 'react';
import  {Field,reduxForm} from "redux-form";

type LoginPropsType = {}
export const Login = (props: LoginPropsType) => {
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm/>
    </div>
}

type LoginFormPropsType = {}
export const LoginForm = (props: LoginFormPropsType) => {
    return <form>
        <div>
            <Field placeholder={'Login'} component={'input'}/>
        </div>
        <div>
            <input placeholder={'Password'}/>
        </div>
        <div>
            <input type={'checkbox'}/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
