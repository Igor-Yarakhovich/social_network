import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profileReducer";
import {messagesReducer} from "./messagesReducer";
import {sidebarReducer} from "./sidebarReducer";
import {usersReducer} from "./usersReducer";

export let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:messagesReducer,
    sidebar:sidebarReducer,
    usersPage: usersReducer
})

export let store: Store<RootType> = createStore(reducers);

export type RootType = ReturnType<typeof reducers>