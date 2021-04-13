import React from 'react'
import {Post} from './Post/Post'
import s from './MyPosts.module.css'


const postsData = [
    {id: 1, message: 'Hello', likesCount: '11'},
    {id: 1, message: 'Buy', likesCount: '15'},
]

const postsElements = postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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
                {postsElements}
            </div>
        </div>
    )
}

