import React from 'react'
import {Post} from './Post/Post'
import s from './MyPosts.module.css'
import {ProfilePageType} from '../../../redux/state';


export function MyPosts(props: ProfilePageType) {

    const postsElements = props.postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div className={s.textarea}>
                    <textarea></textarea>
                </div>
                <div>
                    <button className={s.button}>Add post</button>
                </div>
            </div>

            <div>
                {postsElements}
            </div>
        </div>
    )
}

