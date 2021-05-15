import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reduser';
import {Dialogs} from './Dialogs';
import {StoreContext} from '../../storeContext';


export type DialogsPropsType = {}

export function DialogsContainer(props: DialogsPropsType) {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().dialogsPage

                const onClickAddMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }

                const onChangeMessage = (newText: string) => {
                    store.dispatch(updateNewMessageTextActionCreator(newText))
                }
                return <Dialogs
                    stateDialogsPage={state}
                    addMessage={onClickAddMessage}
                    updateNewMessageText={onChangeMessage}
                />
            }}
        </StoreContext.Consumer>
    )
}
