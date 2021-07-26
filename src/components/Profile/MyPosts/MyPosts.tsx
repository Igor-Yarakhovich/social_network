import React, {ChangeEvent} from 'react';
import m from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostsType} from "../../../redux/types";

type MyPostsType = {
    postsData: Array<PostsType>
    newPostText: string
    addPostCallback: () => void
    changeNewTextCallback: (newText: string) => void
}


export const MyPosts = (props: MyPostsType) => {

    let PostsDataElement = props.postsData.map((p: PostsType) => <Post message={p.message} counts={p.counts}/>)

    let addPosts = () => {
        props.addPostCallback()
    }


    let onPostOnchange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewTextCallback(e.currentTarget.value);
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostOnchange}
                          value={props.newPostText}
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

