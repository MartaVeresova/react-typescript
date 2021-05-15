import {combineReducers, createStore} from 'redux';
import profileReduser from './profile-reduser';
import dialogsReduser from './dialogs-reduser';
import sidebarReduser from './sidebar-reduser';
import {StoreType} from './store';

const reducers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    sidebar: sidebarReduser,
})

export const store: StoreType = createStore(reducers)