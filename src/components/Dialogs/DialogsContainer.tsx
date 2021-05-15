import React, {ChangeEvent} from 'react';
import {ActionsTypes, StoreType,} from '../../redux/store';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reduser';
import {Dialogs} from './Dialogs';


export type DialogsPropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

export function DialogsContainer(props: DialogsPropsType) {
    const state = props.store.getState()

    const onClickAddMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextActionCreator(e.currentTarget.value))
    }

    return (
        <Dialogs
            stateDialogsPage={state.dialogsPage}
            addMessage={onClickAddMessage}
            updateNewMessageText={onChangeMessage}
        />
    )
}
