import {v1} from 'uuid';
import {ActionsTypes} from './store';
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from './redux-store';
import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const SET_USER_PROFILE = 'SET-USER-PROFILE'
export const SET_STATUS = 'SET-STATUS'

export const addPost = () => ({type: ADD_POST}) as const
export const updateNewPostText = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText,
    } as const
}
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile}) as const
export const setStatus = (status: string) => ({type: SET_STATUS, status}) as const

export type ProfileType = {
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

export type PostType = {
    id: string
    message: string
    likesCount: number
}

const initialState = {
    postsData: [
        {id: v1(), message: 'Hello', likesCount: 11},
        {id: v1(), message: 'Buy', likesCount: 15},
    ] as Array<PostType>,
    newPostText: '',
    profile: null as ProfileType | null,
    status: '',
}

export type InitialStateType = {
    postsData: Array<PostType>
    newPostText: string
    profile: ProfileType | null,
    status: string,
}

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                postsData: [
                    ...state.postsData,
                    {id: v1(), message: state.newPostText, likesCount: 0}
                ],
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}


type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUserProfile = (userId: string): ThunkType => {

    return async (dispatch: Dispatch) => {
        await profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getUserStatus = (userId: string): ThunkType => {

    return async (dispatch: Dispatch) => {
        await profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data))
            })
    }
}

export const updateUserStatus = (status: string): ThunkType => {

    return async (dispatch: Dispatch) => {
        await profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export default profileReducer