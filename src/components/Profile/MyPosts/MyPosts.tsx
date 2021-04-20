import React from 'react'
import {Post} from './Post/Post'
import s from './MyPosts.module.css'
import {ProfilePageType} from '../../../redux/state';

type PropsType = ProfilePageType & {
    addPost: (postText: string) => void
}


export function MyPosts(props: PropsType) {

    const postsElements = props.postsData.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    const onClickAddPost = () => {
        if (newPostElement.current) {
            let text = (newPostElement.current?.value)
            props.addPost(text)
        }
    }


    return (
        <div className={s.myPosts}>
            <h3>My posts</h3>
            <div>
                <div className={s.textarea}>
                    <textarea ref={newPostElement}></textarea>
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

