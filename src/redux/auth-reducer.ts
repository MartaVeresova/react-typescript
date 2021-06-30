import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {ThunkAction} from 'redux-thunk';
import { AppStateType} from './redux-store';
import {ActionsTypes} from './store';

export const SET_USER_DATA = 'SET-USER-DATA'

export const setAuthUserData = (userId: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {userId, email, login}
}) as const

export type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getAuthUserData = (): ThunkType => {

    return async (dispatch: Dispatch) => {
        await authAPI.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    dispatch(setAuthUserData(id, email, login))
                }
            })
    }
}

// export const login = (): ThunkType => {
//
//     return async (dispatch: Dispatch) => {
//         await authAPI.login(email, password, rememberMe, captcha)
//             .then(data => {
//                 if (data.resultCode === 0) {
//                     let {email, password, rememberMe, captcha} = data.data
//                     dispatch(setAuthUserData(email, password, rememberMe, captcha))
//                 }
//             })
//     }
// }


export default authReducer