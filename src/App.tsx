import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {HashRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {MessagesContainer} from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {RootType} from "./redux/redux-store";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {Preloader} from "./components/common/Preloader/Preloader";

type AppPropsType = {
    initializeApp: () => void
    initialized: boolean
}

class App extends React.Component<AppPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (

            <div className="app-wrapper">
                <HashRouter>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path={"/Message"} render={() => <MessagesContainer/>}/>
                        <Route path={"/Profile/:userId?"} render={() => <ProfileContainer/>}/>
                        <Route path={"/Users"} render={() => <UsersContainer/>}/>
                        <Route path={"/News"} render={() => <News/>}/>
                        <Route path={"/Music"} render={() => <Music/>}/>
                        <Route path={"/Settings"} render={() => <Settings/>}/>
                        <Route path={"/Login"} render={() => <Login/>}/>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

type MapStatePropsType = {
    initialized: boolean
}
const MapStateToProps = (state: RootType): MapStatePropsType => ({initialized: state.app.initialized})

export default compose<any>(connect(MapStateToProps, {initializeApp})(App))
// connect<MapStatePropsType, MapDispatchPropsType, {},g RootType>(MapStateToProps, {initializeApp})(App))
// export default connect(MapStateToProps, {initializeApp})(App);
