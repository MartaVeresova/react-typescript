import React from 'react'
import {Post} from './Post/Post'
import s from './MyPosts.module.css'

export function MyPosts() {
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
                <Post message="Hello" likesCount="11"/>
                <Post message="Buy" likesCount="15"/>
            </div>
        </div>
    )
}

