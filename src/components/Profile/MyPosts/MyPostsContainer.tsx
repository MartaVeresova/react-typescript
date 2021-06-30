import {addPost, PostType} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';


export type MapStateToPropsType = {
    postsData: Array<PostType>
}

export type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
}

export type MyPostsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
    }
}

export const MyPostsContainer = connect(mapStateToProps, {
    addPost,
})(MyPosts)

