import {authAPI, ResponseStatuses, securityAPI} from '../api/api';
import {AppThunkType} from './store';
import {stopSubmit} from 'redux-form';


const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    captcha: null as string | null,
    isAuth: false,
}
export type InitialStateType = typeof initialState


export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {

    switch (action.type) {
        case 'auth/SET-USER-DATA':
            return {
                ...state,
                ...action.payload,
            }

        case 'auth/GET-CAPTCHA-URL-SUCCESS':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

//actions
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, captcha: string | null, isAuth: boolean) =>
    ({type: 'auth/SET-USER-DATA', payload: {userId, email, login, captcha, isAuth}} as const)

export const getCaptchaUrlSuccess = (captcha: string) =>
    ({type: 'auth/GET-CAPTCHA-URL-SUCCESS', payload: {captcha}} as const)


//thunks
export const getAuthUserData = (): AppThunkType => async dispatch => {
    const res = await authAPI.authMe()
    if (res.data.resultCode === ResponseStatuses.success) {
        let {id, email, login} = res.data.data
        dispatch(setAuthUserData(id, email, login, null, true))
    }
    return res
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunkType => async dispatch => {
    const res = await authAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === ResponseStatuses.success) {
        dispatch(getAuthUserData())
    } else {
        if (res.data.resultCode === ResponseStatuses.captcha) {
            dispatch(getCaptchaUrl())
        }
        const errorMessage = res.data.messages.length ? res.data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: errorMessage}))
    }
}

export const logout = (): AppThunkType => async dispatch => {
    const res = await authAPI.logout()
    if (res.data.resultCode === ResponseStatuses.success) {
        dispatch(setAuthUserData(null, null, null, null, false))
    }
}

export const getCaptchaUrl = (): AppThunkType => async dispatch => {
    const res = await securityAPI.getCaptchaUrl()
    const captcha = res.data.url
    dispatch(getCaptchaUrlSuccess(captcha))
}


//types
export type SetAuthUserDataActionType = ReturnType<typeof setAuthUserData>
export type GetCaptchaUrlSuccessActionType = ReturnType<typeof getCaptchaUrlSuccess>
export type AuthActionsType =
    | SetAuthUserDataActionType
    | GetCaptchaUrlSuccessActionType