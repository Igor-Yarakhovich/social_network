import React, {Suspense} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {HashRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {RootType, store} from "./redux/redux-store";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {Preloader} from "./components/common/Preloader/Preloader";


const MessagesContainer = React.lazy(() =>
    import('./components/Messages/MessagesContainer')
        .then(({MessagesContainer}) => ({default: MessagesContainer})));


// const ProfileContainer = React.lazy(() =>
//     import('./components/Profile/ProfileContainer')
//         .then(({ProfileContainer}) => ({default: ProfileContainer})));

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

                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Suspense fallback={<Preloader/>}>
                        <Route path={"/Message"} render={() => <MessagesContainer/>}/>
                        <Route path={"/Profile/:userId?"} render={() => <ProfileContainer/>}/>
                        <Route path={"/Users"} render={() => <UsersContainer/>}/>
                        <Route path={"/News"} render={() => <News/>}/>
                        <Route path={"/Music"} render={() => <Music/>}/>
                        <Route path={"/Settings"} render={() => <Settings/>}/>
                        <Route path={"/Login"} render={() => <Login/>}/>
                    </Suspense>
                </div>

            </div>
        );
    }
}

type MapStatePropsType = {
    initialized: boolean
}
const MapStateToProps = (state: RootType): MapStatePropsType => ({initialized: state.app.initialized})

const AppContainer = compose(connect(MapStateToProps, {initializeApp})(App))

export const MainApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
// connect<MapStatePropsType, MapDispatchPropsType, {},g RootType>(MapStateToProps, {initializeApp})(App))
// export default connect(MapStateToProps, {initializeApp})(App);
