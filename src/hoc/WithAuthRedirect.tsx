import {Redirect} from "react-router";
import React from "react";
import {RootType} from "../redux/redux-store";
import {connect} from "react-redux";

type mapStateToPropsType = {
    isAuth: boolean
}
const mapStateToPropsForRedirect = (state: RootType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export function withAuthRedirect <WPC>(WrapperComponent: React.ComponentType<WPC>) {
    const RedirectComponent: React.FC<mapStateToPropsType> = ({isAuth, ...restProps}) => {
        if (!isAuth) return <Redirect to='/Login'/>
        return <WrapperComponent {...restProps as unknown as WPC}/>
    }
    return connect<mapStateToPropsType, {}, WPC, RootType>(mapStateToPropsForRedirect)(RedirectComponent)
}