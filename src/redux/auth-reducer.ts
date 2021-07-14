import {authAPI, ResponseStatuses} from '../api/api';
import {AppThunkType} from './redux-store';
import {stopSubmit} from 'redux-form';


const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    captcha: false,
    isAuth: false
}
type InitialStateType = typeof initialState

const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {

    switch (action.type) {
        case 'SET-USER-DATA':
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
    ({type: 'SET-USER-DATA', payload: {userId, email, login, captcha, isAuth}} as const)


//thunks
export const getAuthUserData = (): AppThunkType => async dispatch => {
    const data = await authAPI.authMe()
    if (data.resultCode === ResponseStatuses.success) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true, true))
    }
    return data
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: boolean): AppThunkType => async dispatch => {
    const data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResponseStatuses.success) {
        dispatch(getAuthUserData())
    } else {
        if (data.messages.length) {
            dispatch(stopSubmit('login', {_error: data.messages[0]}))
        } else {
            dispatch(stopSubmit('login', {_error: 'Some error'}))
        }
    }
}

export const logout = (): AppThunkType => async dispatch => {
    const data = await authAPI.logout()
    if (data.resultCode === ResponseStatuses.success) {
        dispatch(setAuthUserData(null, null, null, false, false))
    }
}


//types
export type SetAuthUserDataActionType = ReturnType<typeof setAuthUserData>
export type AuthActionsType = SetAuthUserDataActionType


export default authReducer