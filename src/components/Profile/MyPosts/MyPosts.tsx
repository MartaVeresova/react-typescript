import React from 'react'
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

export function MyPosts() {
    return (
        <div>
            My posts

            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div>
                <Post message='Hello' likesCount='11'/>
                <Post message='Buy' likesCount='15'/>

            </div>
        </div>
    )
}

