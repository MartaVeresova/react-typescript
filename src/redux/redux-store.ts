import {combineReducers, createStore} from 'redux';
import profileReduser from './profile-reduser';
import dialogsReduser from './dialogs-reduser';
import sidebarReduser from './sidebar-reduser';

const reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser,
})

export const store = createStore(reducers)