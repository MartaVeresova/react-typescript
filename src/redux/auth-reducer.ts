import {authAPI, ResponseStatuses} from '../api/api';
import {AppThunkType} from './store';
import {stopSubmit} from 'redux-form';


const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    captcha: false,
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
        default:
            return state
    }
}

//actions
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, captcha: boolean, isAuth: boolean) =>
    ({type: 'auth/SET-USER-DATA', payload: {userId, email, login, captcha, isAuth}} as const)


//thunks
export const getAuthUserData = (): AppThunkType => async dispatch => {
    const res = await authAPI.authMe()
    if (res.data.resultCode === ResponseStatuses.success) {
        let {id, email, login} = res.data.data
        dispatch(setAuthUserData(id, email, login, true, true))
    }
    return res
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: boolean): AppThunkType => async dispatch => {
    const res = await authAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === ResponseStatuses.success) {
        dispatch(getAuthUserData())
    } else {
        if (res.data.messages.length) {
            dispatch(stopSubmit('login', {_error: res.data.messages[0]}))
        } else {
            dispatch(stopSubmit('login', {_error: 'Some error'}))
        }
    }
}

export const logout = (): AppThunkType => async dispatch => {
    const res = await authAPI.logout()
    if (res.data.resultCode === ResponseStatuses.success) {
        dispatch(setAuthUserData(null, null, null, false, false))
    }
}


//types
export type SetAuthUserDataActionType = ReturnType<typeof setAuthUserData>
export type AuthActionsType = SetAuthUserDataActionType