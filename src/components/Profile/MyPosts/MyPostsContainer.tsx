import React from 'react';
import {addPostAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootType} from "../../../redux/redux-store";
import {ActionsType} from "../../../redux/types";

type mstpType = {
    postsData: any;
}

type mdtpType = {
    addPosts: (newPostText:string) => void
}

let mapStateToProps = (state: RootType): mstpType => {
    return {
        postsData: state.profilePage.postsData,
    }
}


let mapDispatchToProps = (dispatch: (action: ActionsType) => void): mdtpType => {
    return {
        addPosts: (newPostText) => {
            dispatch(addPostAC(newPostText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

