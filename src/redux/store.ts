import {v1} from 'uuid';
import {ProfileType} from './profile-reducer';
import {UsersType} from './users-reducer';
import {InitialStateType} from './auth-reducer';

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


type AddPostType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type SetUserProfileType = {
    type: 'SET-USER-PROFILE'
    profile: ProfileType
}
type SetStatusType = {
    type: 'SET-STATUS'
    status: string
}
type AddMessageType = {
    type: 'ADD-MESSAGE'
}
type UpdateNewMessageTextType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newText: string
}
type FollowType = {
    type: 'FOLLOW'
    userId: string
}
type UnfollowType = {
    type: 'UNFOLLOW'
    userId: string
}
type SetUsersType = {
    type: 'SET-USERS'
    users: Array<UsersType>
}
type SetCurrentPageType = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}
type SetTotalUsersCountType = {
    type: 'SET-TOTAL-USERS-COUNT'
    totalCount: number
}
type ToggleIsFetchingType = {
    type: 'TOGGLE-IS-FETCHING'
    isFetching: boolean
}
export type SetAuthUserDataType = {
    type: 'SET-USER-DATA'
    data: InitialStateType
}
export type ToggleIsFollowingProgressType = {
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS'
    isFetching: boolean
    userId: string
}


export type ActionsTypes =
    AddPostType
    | UpdateNewPostTextType
    | SetUserProfileType
    | SetStatusType
    | AddMessageType
    | UpdateNewMessageTextType
    | FollowType
    | UnfollowType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCountType
    | ToggleIsFetchingType
    | SetAuthUserDataType
    | ToggleIsFollowingProgressType


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

        // this._state.profilePage = profileReducer(this._state.profilePage, action)
        // this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        //
        // this._callSubscriber(this._state)
    }
}

//store OOP
