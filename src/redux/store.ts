import {applyMiddleware, combineReducers, createStore, compose} from 'redux';
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
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));


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
window.__store__ = store
