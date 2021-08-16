import {ActionsType, AddPostActionType, ProfilePageType, UpdateNewPostTextActionType} from "./types";
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

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {

    switch (action.type) {
        case "ADD-POST":
            return {
                ...state,
                postsData: [...state.postsData,
                    {id: v1(), message: state.newPostText, counts: 0},
                ],
                newPostText: ''
            }
        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }
}

export const addPostAC = (): AddPostActionType => {
    return {
        type: "ADD-POST",
    }
}

export const updateNewPosTextAC = (newText: string): UpdateNewPostTextActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    }
}