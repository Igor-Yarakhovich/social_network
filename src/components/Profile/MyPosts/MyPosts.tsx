import React, {FormEventHandler} from 'react';
import m from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostsType} from "../../../redux/profileReducer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormControls";

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
            <h3>My posts</h3>
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
            <div>
                <Field name='newPostText'
                       placeholder='Post message'
                       component={Textarea}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add posts</button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

