import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import profileReducer, {ProfileActionsType} from './profile-reducer';
import dialogsReducer, {DialogsActionsType} from './dialogs-reducer';
import sidebarReducer, {SidebarActionsType} from './sidebar-reducer';
import usersReducer, {UsersActionsType} from './users-reducer';
import authReducer, {AuthActionsType} from './auth-reducer';
import {reducer as formReducer} from 'redux-form'
import appReducer, {InitializedAppActionsType} from './app-reducer';

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
