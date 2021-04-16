import {v1} from 'uuid';
import {ProfilePagePropsType} from '../components/Profile/Profile';
import {DialoguesPagePropsType} from '../components/Dialogues/Dialogues';


export type SidebarPageType = {}
export type RootStateType = {
    profilePage: ProfilePagePropsType
    dialoguesPage: DialoguesPagePropsType
    sidebar: SidebarPageType
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
