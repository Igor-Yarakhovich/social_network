import React, {ChangeEvent} from 'react';
import {ActionsType, PostsType, ProfilePageType, StoreType} from "../../../redux/types";
import {addPostAC, updateNewPosTextAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";

type MyPostsContainerType = {
    dispatch: (action: ActionsType) => void,
    profilePage: ProfilePageType
}


export const MyPostsContainer = (props: MyPostsContainerType) => {
    let addPosts = () => {
        props.dispatch(addPostAC(props.profilePage.newPostText))
    }

    let onPostOnchange = (text: string) => {
        props.dispatch(updateNewPosTextAC(text))
    }

    return (<MyPosts updateNewPosText={ onPostOnchange } addPosts={addPosts} postsData={props.profilePage.postsData} newPostText={props.profilePage.newPostText}/>)
}

