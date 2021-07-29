import {v1} from 'uuid';


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
}
export type InitialStateType = typeof initialState


export const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsType): InitialStateType => {

    switch (action.type) {
        case 'dialogsPage/ADD-MESSAGE':
            return {
                ...state,
                messagesData: [
                    ...state.messagesData,
                    {id: v1(), messageContent: action.newMessageText}
                ],
            }
        case 'dialogsPage/REMOVE-MESSAGE':
            return {
                ...state,
                messagesData: [
                    ...state.messagesData.filter(m => m.id !== action.messageId)
                ],
            }
        default:
            return state
    }
}

//actions
export const addMessage = (newMessageText: string) =>
    ({type: 'dialogsPage/ADD-MESSAGE', newMessageText} as const)

export const removeMessage = (messageId: string) =>
    ({type: 'dialogsPage/REMOVE-MESSAGE', messageId} as const)


//types
export type MessageItemType = {
    id?: string
    messageContent: string
}
export type DialogItemType = {
    id: string
    name: string
}

export type AddMessageActionType = ReturnType<typeof addMessage>
export type RemoveMessageActionType = ReturnType<typeof removeMessage>
export type DialogsActionsType =
    | AddMessageActionType
    | RemoveMessageActionType