import {v1} from 'uuid';
import {ChangeEvent} from 'react';

export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    /*addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: () => void
    updateNewMessageText: (newText: string) => void*/
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
export type ProfilePageType = {
    postsData: Array<PostType>
    newPostText: string
}
export type PostType = {
    id?: string
    message: string
    likesCount: number
}
export type DialogsPageType = {
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageItemType>
    newMessageText: string
}
export type MessageItemType = {
    id?: string
    messageContent: string
}
export type DialogItemType = {
    id: string
    name: string
}

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewMessageTextActionCreator>

export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const ADD_MESSAGE = 'ADD-MESSAGE'
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const addPostActionCreator = () => ({type: ADD_POST}) as const
export const updateNewPostTextActionCreator = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newText
}) as const
export const addMessageActionCreator = () => ({type: ADD_MESSAGE}) as const
export const updateNewMessageTextActionCreator = (newText: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: newText
}) as const


export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: v1(), message: 'Hello', likesCount: 11},
                {id: v1(), message: 'Buy', likesCount: 15},
            ],
            newPostText: ''
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
        if (action.type === ADD_POST) {
            let newPost: PostType = {
                id: v1(),
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === ADD_MESSAGE) {
            const newMessage = {
                id: v1(),
                messageContent: this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messagesData.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber()
        }
    }
}

//store OOP


/*
addPost() {
    let newPost: PostType = {
        id: v1(),
        message: this._state.profilePage.newPostText,
        likesCount: 0,
    }
    this._state.profilePage.postsData.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber()
},
updateNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber()
},
addMessage() {
    const newMessage = {
        id: v1(),
        messageContent: this._state.dialogsPage.newMessageText,
    }
    this._state.dialogsPage.messagesData.push(newMessage)
    this._state.dialogsPage.newMessageText = ''
    this._callSubscriber()
},
updateNewMessageText(newNext: string) {
    this._state.dialogsPage.newMessageText = newNext
    this._callSubscriber()
},*/
