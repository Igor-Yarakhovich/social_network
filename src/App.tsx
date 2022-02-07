import React, {Suspense} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {HashRouter, Route, Switch} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {RootType, store} from "./redux/store";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import {Redirect} from "react-router";


const MessagesContainer = React.lazy(() =>
    import('./components/Messages/MessagesContainer')
        .then(({MessagesContainer}) => ({default: MessagesContainer})));

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
                        <Switch>
                            <Route exact path="/" render={()=><Redirect to='/profile'/>}/>
                            <Route path="/message" render={() => <MessagesContainer/>}/>
                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/news" render={() => <News/>}/>
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="/settings" render={() => <Settings/>}/>
                            <Route path="/login" render={() => <Login/>}/>
                            <Route path="*" render={() => <div><h1>404 PAGE NOT FOUND</h1></div>}/>
                        </Switch>
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
