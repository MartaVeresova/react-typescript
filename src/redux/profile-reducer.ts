import {v1} from 'uuid';
import {AppThunk} from './redux-store';
import {profileAPI} from '../api/api';

export const ADD_POST = 'ADD-POST'
export const SET_USER_PROFILE = 'SET-USER-PROFILE'
export const SET_STATUS = 'SET-STATUS'

export type AddPostActionType = ReturnType<typeof addPost>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type SetStatusActionType = ReturnType<typeof setStatus>

export type ProfileActionsType =
    AddPostActionType
    | SetUserProfileActionType
    | SetStatusActionType

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

export type InitialStateType = {
    postsData: Array<PostType>
    profile: ProfileType | null,
    status: string,
}

const initialState = {
    postsData: [
        {id: v1(), message: 'Hello', likesCount: 11},
        {id: v1(), message: 'Buy', likesCount: 15},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
}


const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {

    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [
                    ...state.postsData,
                    {id: v1(), message: action.newPostText, likesCount: 0}
                ],
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

export const addPost = (newPostText: string) => ({type: ADD_POST, newPostText}) as const
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile}) as const
export const setStatus = (status: string) => ({type: SET_STATUS, status}) as const


export const getUserProfile = (userId: string): AppThunk => async dispatch => {
    const data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}

export const getUserStatus = (userId: string): AppThunk => async dispatch => {
    const data = await profileAPI.getStatus(userId)
    dispatch(setStatus(data))
}

export const updateUserStatus = (status: string): AppThunk => async dispatch => {
    const data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export default profileReducer