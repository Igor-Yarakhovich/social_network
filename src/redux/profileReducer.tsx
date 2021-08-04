import {ActionsType, AddPostActionType, PostsType, ProfilePageType, UpdateNewPostTextActionType} from "./types";
import {v1} from "uuid";

let initialState = {
    newPostText: '',
    postsData: [
        {message: 'Hi, how are you?', id: v1(), counts: 15},
        {message: "It's my first post", id: v1(), counts: 45},
        {message: 'Yo, Yo!', id: v1(), counts: 15},
        {message: "Hello!", id: v1(), counts: 45}
    ]
}

export const profileReducer = (_state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
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