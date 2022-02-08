import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {logoutTC} from "../../redux/authReducer";
import {RootType} from "../../redux/store";


class HeaderContainer extends React.Component <MapDispatchPropsType & MapStatePropsType, any> {

    render() {
        return <Header {...this.props} />
    }
}

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    logout: () => void
}

const mapStateToProps = (state: RootType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})
export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootType>(mapStateToProps, {logout: logoutTC})(HeaderContainer)
