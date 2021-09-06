import React, {ChangeEvent} from 'react';
import m from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostsType} from "../../../redux/types";

type MyPostsType = {
    postsData: Array<PostsType>
    newPostText: string
    addPosts: () => void
    updateNewPosText: (text: string) => void
}


export const MyPosts = (props: MyPostsType) => {
    let PostsDataElement = props.postsData.map((p: PostsType) => <Post key={p.id} message={p.message} counts={p.counts}/>)

    let onAddPost = () => {
        props.addPosts();
    }

    let onPostOnchange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.updateNewPosText(text)
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>

                <textarea
                    onChange={onPostOnchange}
                          value={props.newPostText}
                          placeholder={"Enter your post"}
                />
            </div>
            <div>
                <button onClick={onAddPost}>Add posts</button>
            </div>
            <div className={m.posts}>
                {PostsDataElement}
            </div>
        </div>
    )
}

