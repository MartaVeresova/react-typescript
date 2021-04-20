import {v1} from 'uuid';


export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
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
export type DialogsPageType = {
    dialogsData: Array<DialogItemType>
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
        ]
    },
    sidebar: {}
}

export const addPost = (postText: string) => {
    let newPost: PostType = {
        id: v1(),
        message: postText,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost)
}


export default state
