import React from 'react'
import {addPost, PostType, updateNewPostText} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';


type MapStateToPropsType = {
    postsData: Array<PostType>
    newPostText: string
}

type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export type MyPostsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         addPost: () => dispatch(addPostActionCreator()),
//         updateNewPostText: (newText: string) => dispatch(updateNewPostTextActionCreator(newText)),
//     }
// }

export const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    updateNewPostText,
})(MyPosts)

