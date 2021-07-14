import {AppThunkType} from './redux-store';
import {getAuthUserData} from './auth-reducer';


const initialState = {
    initialized: false,
}

type InitialStateType = typeof initialState

const appReducer = (state: InitialStateType = initialState, action: InitializedAppActionsType): InitialStateType => {

    switch (action.type) {
        case 'INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true,
            }

        default:
            return state
    }
}

//actions
export const initializedSuccessAC = () => ({type: 'INITIALIZED-SUCCESS'} as const)


//thunks
export const initializeApp = (): AppThunkType => async dispatch => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccessAC())
        })
}


//types
export type InitializedSuccessActionType = ReturnType<typeof initializedSuccessAC>
export type InitializedAppActionsType = InitializedSuccessActionType


export default appReducer