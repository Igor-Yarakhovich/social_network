import {addPostAC, PostsType} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootType} from "../../../redux/redux-store";


type mstpType = {
    postsData: Array<PostsType>;
}

type mdtpType = {
    addPosts: (newPostText: string) => void
}

type ActionsType = ReturnType<typeof addPostAC>

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

