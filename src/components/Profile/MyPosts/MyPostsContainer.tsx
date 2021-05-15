import React from 'react'
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reduser';
import {MyPosts} from './MyPosts';
import {StoreContext} from '../../../storeContext';

type PropsType = {}

export function MyPostsContainer(props: PropsType) {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().profilePage
                const onClickAddPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                const onChangePost = (value: string) => {
                    store.dispatch(updateNewPostTextActionCreator(value))
                }
                return <MyPosts
                    addPost={onClickAddPost}
                    updateNewPostText={onChangePost}
                    postsData={state.postsData}
                    newPostText={state.newPostText}
                />
            }}
        </StoreContext.Consumer>
    )
}

