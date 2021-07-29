import {AppThunkType} from './store';
import {getAuthUserData} from './auth-reducer';


const initialState = {
    initialized: false,
}
export type InitialStateType = typeof initialState


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
export const initializedSuccess = () => ({type: 'app/INITIALIZED-SUCCESS'} as const)


//thunks
export const initializeApp = (): AppThunkType => async dispatch => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })
}


//types
export type InitializedSuccessActionType = ReturnType<typeof initializedSuccess>
export type InitializedAppActionsType = InitializedSuccessActionType