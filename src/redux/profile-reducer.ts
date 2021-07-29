import {v1} from 'uuid';
import {AppThunkType} from './store';
import {profileAPI} from '../api/api';


const initialState = {
    postsData: [
        {id: v1(), message: 'Hello', likesCount: 11},
        {id: v1(), message: 'Buy', likesCount: 15},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
}
export type InitialStateType = typeof initialState


export const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {

    switch (action.type) {
        case 'profilePage/ADD-POST':
            return {
                ...state,
                postsData: [
                    ...state.postsData,
                    {id: v1(), message: action.newPostText, likesCount: 0}
                ],
            }
        case 'profilePage/SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case 'profilePage/SET-STATUS':
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

//actions
export const addPost = (newPostText: string) =>
    ({type: 'profilePage/ADD-POST', newPostText} as const)

export const setUserProfile = (profile: ProfileType) =>
    ({type: 'profilePage/SET-USER-PROFILE', profile} as const)

export const setStatus = (status: string) =>
    ({type: 'profilePage/SET-STATUS', status} as const)


//thunks
export const getUserProfile = (userId: string): AppThunkType =>
    async dispatch => {
        const data = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(data))
    }

export const getUserStatus = (userId: string): AppThunkType =>
    async dispatch => {
        const data = await profileAPI.getStatus(userId)
        dispatch(setStatus(data))
    }

export const updateUserStatus = (status: string): AppThunkType =>
    async dispatch => {
        const data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }


//types
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

export type AddPostActionType = ReturnType<typeof addPost>
export type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type SetStatusActionType = ReturnType<typeof setStatus>

export type ProfileActionsType =
    | AddPostActionType
    | SetUserProfileActionType
    | SetStatusActionType