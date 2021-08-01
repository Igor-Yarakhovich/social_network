import {ActionsType, AddPostActionType, PostsType, ProfilePageType, UpdateNewPostTextActionType} from "./types";
import {v1} from "uuid";

export const profileReducer = (_state: ProfilePageType, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                id: v1(),
                message: action.newPostText,
                counts: 0
            }
            _state.postsData.push(newPost)
            _state.newPostText = ''
            return _state
        case "UPDATE-NEW-POST-TEXT":
            _state.newPostText = action.newText
            return _state
        default:
            return _state
    }
}

export const addPostAC = (newPostText: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    }
}

export const updateNewPosTextAC = (newText: string): UpdateNewPostTextActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    }
}