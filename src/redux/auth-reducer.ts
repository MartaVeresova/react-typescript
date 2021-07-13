import {authAPI, ResponseStatuses} from '../api/api';
import {AppThunk} from './redux-store';


// export type InitialStateType = {
//     userId: number | null
//     email: string | null
//     login: string | null
//     isAuth: boolean
// }

const initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
}
type InitialStateType = typeof initialState

const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {

    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state
    }
}

//actions
export const setAuthUserData = (userId: number, email: string, login: string) =>
    ({type: 'SET-USER-DATA', data: {userId, email, login}} as const)


//thunks
export const getAuthUserData = (): AppThunk => async dispatch => {
    const data = await authAPI.authMe()
    if (data.resultCode === ResponseStatuses.success) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login))
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


//types
export type SetAuthUserDataActionType = ReturnType<typeof setAuthUserData>
export type AuthActionsType = SetAuthUserDataActionType


export default authReducer