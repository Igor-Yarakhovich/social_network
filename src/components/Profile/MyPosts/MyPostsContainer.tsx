import React from 'react';
import {addPostAC, updateNewPosTextAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootType} from "../../../redux/redux-store";
import {ActionsType} from "../../../redux/types";

type mstpType = {
    postsData: any;
    newPostText: string;
}

type mdtpType = {
    updateNewPosText: (text: string) => void
    addPosts: () => void
}

let mapStateToProps = (state: RootType): mstpType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}


let mapDispatchToProps = (dispatch: (action: ActionsType) => void): mdtpType => {
    return {
        updateNewPosText: (text: string) => {
            dispatch(updateNewPosTextAC(text))
        },
        addPosts: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

