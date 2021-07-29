import {AppThunkType} from './store';
import {getAuthUserData} from './auth-reducer';


const initialState = {
    initialized: false,
}
type InitialStateType = typeof initialState


export const appReducer = (state: InitialStateType = initialState, action: InitializedAppActionsType): InitialStateType => {

    switch (action.type) {
        case 'app/INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true,
            }

        default:
            return state
    }
}

//actions
export const initializedSuccessAC = () => ({type: 'app/INITIALIZED-SUCCESS'} as const)


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