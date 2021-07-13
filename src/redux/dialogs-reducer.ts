import {v1} from 'uuid';

// export type DialogsPageType = {
//     dialogsData: Array<DialogItemType>
//     messagesData: Array<MessageItemType>
//     newMessageText: string
// }

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

const dialogsReducer = (state: InitialStateType = initialState, action: DialogsActionsType): InitialStateType => {

    switch (action.type) {
        case 'ADD-MESSAGE':
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

//actions
export const addMessage = (newMessageText: string) =>
    ({type: 'ADD-MESSAGE', newMessageText} as const)


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
export type DialogsActionsType = AddMessageActionType



export default dialogsReducer