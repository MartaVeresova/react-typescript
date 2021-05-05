import React, {ChangeEvent} from 'react'
import {Post} from './Post/Post'
import s from './MyPosts.module.css'
import {ActionsTypes, ProfilePageType} from '../../../redux/state';

type PropsType = ProfilePageType & {
    dispatch: (action: ActionsTypes) => void
}


export function MyPosts(props: PropsType) {
    const postsElements = props.postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onClickAddPost = () => {
        //props.addPost()
        props.dispatch({type: 'ADD-POST'})
    }
    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //props.updateNewPostText(e.currentTarget.value)
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value})
    }


    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div className={s.textarea}>
                    <textarea
                        onChange={onChangePost}
                        value={props.newPostText}
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

