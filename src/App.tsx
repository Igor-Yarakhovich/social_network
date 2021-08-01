import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Messages} from './components/Messages/Messages'
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionsType, StateType} from "./redux/types";


type AppPropsType = {
    _state: StateType
    dispatch: (action: ActionsType) => void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path={"/Message"}
                           render={() => <Messages messagesData={props._state.messagesPage.messagesData}
                                                   dialogsData={props._state.messagesPage.dialogsData}
                                                   newMessageText={props._state.messagesPage.newMessageText}
                                                   dispatch={props.dispatch}

                           />}/>
                    <Route path={"/Profile"} render={() => <Profile profilePage={props._state.profilePage}
                                                                    // addPostCallback={props.addPost}
                                                                    // changeNewTextCallback={props.changeNewText}
                                                                    dispatch={props.dispatch}
                    />}/>
                    <Route path={"/News"} render={() => <News/>}/>
                    <Route path={"/Music"} render={() => <Music/>}/>
                    <Route path={"/Settings"} render={() => <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
