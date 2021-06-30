import React from 'react'
import {Post} from './Post/Post'
import s from './MyPosts.module.css'
import {MyPostsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';


export function MyPosts(props: MyPostsType) {

    const postsElements = props.postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)


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
}

type FormDataType = {
    newPostText: string
}

export const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder='enter text'
                    name='newPostText'
                    component='textarea'
                />
            </div>
            <div>
                <button className={s.button}>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm<FormDataType>({form: 'addPostForm'})(AddPostForm)
