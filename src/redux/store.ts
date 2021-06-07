import {v1} from 'uuid';
import profileReducer, {addPost, setUserProfile, updateNewPostText} from './profile-reducer';
import dialogsReducer, {addMessage, updateNewMessageText} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow
} from './users-reducer';

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarPageType

}
export type SidebarPageType = {}
type ProfilePageType = {
    postsData: Array<PostType>
    newPostText: string
    profile: any
}
type PostType = {
    id?: string
    message: string
    likesCount: number
}
type DialogsPageType = {
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageItemType>
    newMessageText: string
}
type MessageItemType = {
    id?: string
    messageContent: string
}
type DialogItemType = {
    id: string
    name: string
}

export type ActionsTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof addMessage>
    | ReturnType<typeof updateNewMessageText>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>


export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: v1(), message: 'Hello', likesCount: 11},
                {id: v1(), message: 'Buy', likesCount: 15},
            ],
            newPostText: '',
            profile: null
        },
        dialogsPage: {
            dialogsData: [
                {id: v1(), name: 'Marta'},
                {id: v1(), name: 'Sasha'},
                {id: v1(), name: 'Vera'},
                {id: v1(), name: 'Anton'},
                {id: v1(), name: 'Vanya'},
            ],
            messagesData: [
                {id: v1(), messageContent: 'Hello'},
                {id: v1(), messageContent: 'How are you?'},
                {id: v1(), messageContent: 'Yo'},
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },

    dispatch(action) { //{type: 'ADD-POST'} --- объект, в котором есть свойство type со значением строка

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
}

//store OOP
