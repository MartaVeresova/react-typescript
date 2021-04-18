import {v1} from 'uuid';


export type RootStateType = {
    profilePage: ProfilePageType
    dialoguesPage: DialoguesPageType
    sidebar: SidebarPageType
}
export type SidebarPageType = {}
export type ProfilePageType = {
    postsData: Array<PostType>
}
export type PostType = {
    id?: string
    message: string
    likesCount: number
}
export type DialoguesPageType = {
    dialoguesData: Array<DialogItemType>
    messagesData: Array<MessageItemType>
}
export type MessageItemType = {
    id?: string
    messageContent: string
}
export type DialogItemType = {
    id: string
    name: string
}


let state: RootStateType = {
    profilePage: {
        postsData: [
            {id: v1(), message: 'Hello', likesCount: 11},
            {id: v1(), message: 'Buy', likesCount: 15},
        ]
    },
    dialoguesPage: {
        dialoguesData: [
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
        ]
    },
    sidebar: {}
}
export default state
