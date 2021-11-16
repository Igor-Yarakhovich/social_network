import React from 'react';
import {LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router";
import {RootType} from "../../redux/redux-store";

type LoginPropsType = {
    login: any
    isAuth: boolean
}

const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state: RootType) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)

