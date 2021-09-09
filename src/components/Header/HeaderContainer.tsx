import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
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
        axios.get<HeaderResponseType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login);
                }
            })
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
    setAuthUserData: (id: number, email: string, login: string) => void
}

const mapStateToProps = (state: RootType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login

})
export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootType>(mapStateToProps, {setAuthUserData})(HeaderContainer)
