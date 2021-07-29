import React from 'react'
import {Post} from './Post/Post'
import s from './MyPosts.module.css'
import {MyPostsType} from './MyPostsContainer';
import {reduxForm} from 'redux-form';
import {AddPostForm, FormDataType} from './AddPostForm';


export const MyPosts = React.memo((props: MyPostsType) => {

    const postsElements = props.postsData.map(p =>
        <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onClickAddPost = (formData: FormDataType) => {
        props.addPost(formData.newPostText)
    }

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={onClickAddPost}/>

            <div>
                {postsElements}
            </div>
        </div>
    )
})


const AddPostReduxForm = reduxForm<FormDataType>({form: 'addPostForm'})(AddPostForm)
