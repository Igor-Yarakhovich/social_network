import React, {ChangeEvent} from 'react';
import m from './MyPosts.module.css'
import {Post} from './Post/Post';
import {ActionsType, PostsType} from "../../../redux/types";
import {addPostAC, updateNewPosTextAC} from "../../../redux/profileReducer";

type MyPostsType = {
    postsData: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionsType) => void
}


export const MyPosts = (props: MyPostsType) => {

    let PostsDataElement = props.postsData.map((p: PostsType) => <Post message={p.message} counts={p.counts}/>)

    let addPosts = () => {
        props.dispatch(addPostAC(props.newPostText))
    }


    let onPostOnchange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPosTextAC(e.currentTarget.value))
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostOnchange}
                          value={props.newPostText}
                          placeholder={"Enter your post"}
                />
            </div>
            <div>
                <button onClick={addPosts}>Add posts</button>
            </div>
            <div>
                New posts
            </div>
            <div className={m.posts}>
                {PostsDataElement}
            </div>
        </div>
    )
}

