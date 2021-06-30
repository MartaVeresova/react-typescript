import {v1} from 'uuid';
import {ActionsTypes} from './store';

export const ADD_MESSAGE = 'ADD-MESSAGE'

export const addMessage = (newMessageText: string) => ({type: ADD_MESSAGE, newMessageText})

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

const initialState = {
    dialogsData: [
        {id: v1(), name: 'Marta'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Vera'},
        {id: v1(), name: 'Anton'},
        {id: v1(), name: 'Vanya'},
    ] as Array<DialogItemType>,
    messagesData: [
        {id: v1(), messageContent: 'Hello'},
        {id: v1(), messageContent: 'How are you?'},
        {id: v1(), messageContent: 'Yo'},
    ] as Array<MessageItemType>,
    // newMessageText: ''
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesData: [
                    ...state.messagesData,
                    {id: v1(), messageContent: action.newMessageText}
                ],
            }
        default:
            return state
    }
}

export default dialogsReducer