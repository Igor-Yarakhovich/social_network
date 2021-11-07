import React from 'react';
import m from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostsType} from "../../../redux/profileReducer";
import {Field, reduxForm} from "redux-form";


type MyPostsType = {
    postsData: Array<PostsType>
    // newPostText: string
    addPosts: (newPostText: string) => void
}


export const MyPosts = (props: MyPostsType) => {
    let PostsDataElement = props.postsData.map((p: PostsType) => <Post key={p.id} message={p.message}
                                                                       counts={p.counts}/>)

    let onAddPost = (values: any) => {
        props.addPosts(values.newPostText);
    }
    return (
        <div>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}
            />
            <div className={m.posts}>
                {PostsDataElement}
            </div>
        </div>
    )
}

type AddNewPostTextPropsType = {
    handleSubmit: any
}

let AddNewPostForm = (props: AddNewPostTextPropsType) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component='textarea'/>
            </div>
            <div>
                <button>Add posts</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

