import {createStore, combineReducers} from "redux";
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {sidebarReducer} from "./sidebarReducer";

export let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:messagesReducer,
    sidebar:sidebarReducer
})

export let store = createStore(reducers);

