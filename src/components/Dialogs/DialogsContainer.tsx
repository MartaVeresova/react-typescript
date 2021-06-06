import React from 'react';
import {addMessage, InitialStateType, updateNewMessageText} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';


type MapStateToPropsType = {
    stateDialogsPage: InitialStateType
}

type MapDispatchToPropsType = {
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
}
export type DialogsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        stateDialogsPage: state.dialogsPage
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//
//     return {
//         addMessage: () => dispatch(addMessageActionCreator()),
//         updateNewMessageText: (newText: string) => dispatch(updateNewMessageTextActionCreator(newText)),
//     }
// }

export const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    updateNewMessageText,
})(Dialogs)
