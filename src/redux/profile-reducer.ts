import {v1} from 'uuid';
import {AppThunkType} from './store';
import {profileAPI} from '../api/api';


const initialState = {
    postsData: [
        {id: v1(), message: 'Hello', likesCount: 11},
        {id: v1(), message: 'Buy', likesCount: 15},
        {id: v1(), message: 'How are you?', likesCount: 7},
        {id: v1(), message: 'I am fine, and you?', likesCount: 5},
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
        case 'profilePage/REMOVE-POST':
            return {
                ...state,
                postsData: [
                    ...state.postsData.filter(p => p.id !== action.postId)
                ],
            }
        case 'profilePage/SAVE-PHOTO-SUCCESS':
            if (state.profile) {
                return {
                    ...state,
                    profile: {...state.profile, photos: action.photos}
                }
            } else return state

        default:
            return state
    }
}

//actions
export const addPost = (newPostText: string) =>
    ({type: 'profilePage/ADD-POST', newPostText} as const)

export const setUserProfile = (profile: ProfileType | null) =>
    ({type: 'profilePage/SET-USER-PROFILE', profile} as const)

export const setStatus = (status: string) =>
    ({type: 'profilePage/SET-STATUS', status} as const)

export const removePost = (postId: string) =>
    ({type: 'profilePage/REMOVE-POST', postId} as const)

export const savePhotoSuccess = (photos: {small: string, large: string}) =>
    ({type: 'profilePage/SAVE-PHOTO-SUCCESS', photos} as const)


//thunks
export const getUserProfile = (userId: string): AppThunkType =>
    async dispatch => {
        const res = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(res.data))
    }

export const getUserStatus = (userId: string): AppThunkType =>
    async dispatch => {
        const res = await profileAPI.getStatus(userId)
        dispatch(setStatus(res.data))
    }

export const updateUserStatus = (status: string): AppThunkType =>
    async dispatch => {
        const res = await profileAPI.updateStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }

export const savePhoto = (photo: File): AppThunkType =>
    async dispatch => {
        const res = await profileAPI.savePhoto(photo)
        if (res.data.resultCode === 0) {
            dispatch(savePhotoSuccess(res.data.data.photos))
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
        small: string | undefined
        large: string | undefined
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
export type RemovePostActionType = ReturnType<typeof removePost>
export type SavePhotoSuccessActionType = ReturnType<typeof savePhotoSuccess>

export type ProfileActionsType =
    | AddPostActionType
    | SetUserProfileActionType
    | SetStatusActionType
    | RemovePostActionType
    | SavePhotoSuccessActionType