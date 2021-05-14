import React from 'react'
import {ActionsTypes, DialogsPageType} from './store';
import {v1} from 'uuid';

export const ADD_MESSAGE = 'ADD-MESSAGE'
export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const addMessageActionCreator = () => ({type: ADD_MESSAGE}) as const
export const updateNewMessageTextActionCreator = (newText: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: newText
}) as const

const initialState = {
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
}

const dialogsReduser = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: v1(),
                messageContent: state.newMessageText,
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export default dialogsReduser