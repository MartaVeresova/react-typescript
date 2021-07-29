import {
    addMessage,
    DialogItemType,
    dialogsReducer,
    InitialStateType,
    MessageItemType,
    removeMessage
} from './dialogs-reducer';


let startState: InitialStateType
beforeEach(() => {
    startState = {
        dialogsData: [
            {id: '1', name: 'Marta'},
            {id: '2', name: 'Sasha'},
            {id: '3', name: 'Vera'},
            {id: '4', name: 'Anton'},
            {id: '5', name: 'Vanya'},
        ] as Array<DialogItemType>,
        messagesData: [
            {id: '10', messageContent: 'Hello'},
            {id: '11', messageContent: 'How are you?'},
            {id: '12', messageContent: 'Yo'},
        ] as Array<MessageItemType>,
    }
});

test('new message should be added', () => {
    const newMessageText = 'New Message'
    const action = addMessage(newMessageText);

    const endState = dialogsReducer(startState, action)

    expect(endState.messagesData.length).toBe(4);
    expect(endState.messagesData[3].messageContent).toBe(newMessageText);
    expect(endState.messagesData[0].messageContent).toBe('Hello');
});

test('correct post should be removed', () => {
    const action = removeMessage('10');

    const endState = dialogsReducer(startState, action)

    expect(endState.messagesData.length).toBe(2);
    expect(endState.messagesData[2]).toBeUndefined();
    expect(endState.messagesData[1].messageContent).toBe('Yo');
    expect(endState.messagesData[0].id).toBe('11');
});