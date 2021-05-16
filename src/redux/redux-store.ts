import {combineReducers, createStore} from 'redux';
import profileReduser from './profile-reduser';
import dialogsReduser from './dialogs-reduser';
import sidebarReduser from './sidebar-reduser';

const rootReducer = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)