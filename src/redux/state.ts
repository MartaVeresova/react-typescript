import {v1} from 'uuid';

let rerenderEntireTree = () => {
    console.log('state changed')
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


export let state: RootStateType = {
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
}

export const addPost = () => {
    let newPost: PostType = {
        id: v1(),
        message: state.profilePage.newPostText,
        likesCount: 0,
    }
    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}
export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}


export const addMessage = () => {
    const newMessage = {
        id: v1(),
        messageContent: state.dialogsPage.newMessageText,
    }
    state.dialogsPage.messagesData.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree()
}
export const updateNewMessageText = (newNext: string) => {
    state.dialogsPage.newMessageText = newNext
    rerenderEntireTree()
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer
}

