import {addMessage, InitialStateType} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {ComponentType} from 'react';


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        stateDialogsPage: state.dialogsPage,
    }
}

export const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps, {addMessage,}),
    withAuthRedirect
)(Dialogs)


//types
type MapStateToPropsType = {
    stateDialogsPage: InitialStateType
}

type MapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
}
export type DialogsType = MapStateToPropsType & MapDispatchToPropsType