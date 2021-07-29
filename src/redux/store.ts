import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {ProfileActionsType, profileReducer} from './profile-reducer';
import {DialogsActionsType, dialogsReducer} from './dialogs-reducer';
import {SidebarActionsType, sidebarReducer} from './sidebar-reducer';
import {UsersActionsType, usersReducer} from './users-reducer';
import {AuthActionsType, authReducer} from './auth-reducer';
import {reducer as formReducer} from 'redux-form'
import {appReducer, InitializedAppActionsType} from './app-reducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppActionsType =
    | AuthActionsType
    | DialogsActionsType
    | ProfileActionsType
    | SidebarActionsType
    | UsersActionsType
    | InitializedAppActionsType

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType,
    AppStateType,
    unknown,
    AppActionsType>

//@ts-ignore
window.store = store
