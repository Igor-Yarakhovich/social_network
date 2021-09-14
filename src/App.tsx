import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {MessagesContainer} from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";


function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
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
            </div>
        </BrowserRouter>
    );
}

export default App;
