import React, {ChangeEvent, KeyboardEvent} from 'react'
import {Post} from './Post/Post'
import s from './MyPosts.module.css'
import {MyPostsType} from './MyPostsContainer';


export function MyPosts(props: MyPostsType) {

    const postsElements = props.postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onClickAddPost = () => {
        props.addPost()
    }
    const onKeyPressEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        (e.key === 'Enter') && onClickAddPost()
    }
    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }


    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div className={s.textarea}>
                    <textarea
                        onChange={onChangePost}
                        value={props.newPostText}
                        onKeyPress={onKeyPressEnter}
                    />
                </div>
                <div>
                    <button className={s.button} onClick={onClickAddPost}>
                        Add post
                    </button>
                </div>
            </div>

            <div>
                {postsElements}
            </div>
        </div>
    )
}

