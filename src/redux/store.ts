import {combineReducers, createStore, Store, applyMiddleware} from "redux";
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./appReducer";

export let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export let store: Store<RootType> = createStore(reducers, applyMiddleware(thunkMiddleware));

export type RootType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store