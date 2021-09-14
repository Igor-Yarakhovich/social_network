import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/authReducer";
import {RootType} from "../../redux/redux-store";

type HeaderResponseType = {
    resultCode: number
    data: {
        id: number
        email: string,
        login: string,
    }
    setAuthUserData: (id: number, email: string, login: string) => void
}


class HeaderContainer extends React.Component <MapDispatchPropsType & MapStatePropsType, any> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} />
    }
}

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
}

const mapStateToProps = (state: RootType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})
export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootType>(mapStateToProps, {getAuthUserData})(HeaderContainer)
