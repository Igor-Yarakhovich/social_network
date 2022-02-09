import React, {FormEventHandler} from 'react';
import m from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostsType} from "../../../redux/profileReducer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormControls";
import SuperButton from "../../../assets/superButton/SuperButton";

type MyPostsType = {
    postsData: Array<PostsType>
    addPosts: (newPostText: string) => void
}

const maxLength10 = maxLengthCreator(10)

export const MyPosts = React.memo((props: MyPostsType) => {

    let PostsDataElement = props.postsData.map((p: PostsType) => <Post key={p.id} message={p.message}
                                                                       counts={p.counts}/>)

    let onAddPost = (values: any) => {
        props.addPosts(values.newPostText);
    }
    return (
        <div>
            <div className={m.header}>My posts</div>
            <AddNewPostFormRedux onSubmit={onAddPost}
            />
            <div className={m.posts}>
                {PostsDataElement}
            </div>
        </div>
    )
})

type AddNewPostTextPropsType = {
    handleSubmit: FormEventHandler<HTMLFormElement> | undefined
}

let AddNewPostForm = (props: AddNewPostTextPropsType) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={m.addPostContainer}>
                <div>
                    <Field name='newPostText'
                           placeholder='Post message'
                           component={Textarea}
                           validate={[required, maxLength10]}
                    />
                </div>
                <div className={m.addPostButton}>
                    <SuperButton>Add posts</SuperButton>
                </div>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

