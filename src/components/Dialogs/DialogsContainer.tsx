import React from 'react';
import {
    addMessageActionCreator,
    InitialStateType,
    updateNewMessageTextActionCreator
} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';


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
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {

    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        updateNewMessageText: (newText: string) => dispatch(updateNewMessageTextActionCreator(newText)),
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
