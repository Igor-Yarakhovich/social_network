import React from 'react';
import {LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {loginTC} from "../../redux/authReducer";
import {Redirect} from "react-router";
import {RootType} from "../../redux/store";

type LoginPropsType = {
    login: any
    isAuth: boolean
    captchaUrl: string | null
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captchaUrl)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state: RootType) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login: loginTC})(Login)

