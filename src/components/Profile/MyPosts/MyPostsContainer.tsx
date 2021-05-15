import React, {ChangeEvent} from 'react'
import {StoreType,} from '../../../redux/store';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reduser';
import {MyPosts} from './MyPosts';

type PropsType = {
    store: StoreType
}

export function MyPostsContainer(props: PropsType) {
    //const state = props.store.getState()

    const onClickAddPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const onChangePost = (value: string) => {
        debugger
        props.store.dispatch(updateNewPostTextActionCreator(value))
    }

    return (
        <MyPosts
            addPost={onClickAddPost}
            updateNewPostText={onChangePost}
            postsData={props.store.getState().profilePage.postsData}
            newPostText={props.store.getState().profilePage.newPostText}
        />
    )
}

