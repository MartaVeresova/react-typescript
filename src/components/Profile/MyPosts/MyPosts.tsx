import React, {ChangeEvent} from 'react'
import {Post} from './Post/Post'
import s from './MyPosts.module.css'
import {ProfilePageType, updateNewPostText} from '../../../redux/state';

type PropsType = ProfilePageType & {
    addPost: () => void
    updateNewPostText: (newText: string | '') => void
}


export function MyPosts(props: PropsType) {
    const postsElements = props.postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onClickAddPost = () => {
        props.addPost()
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

