import {addMessage, InitialStateType, updateNewMessageText} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';


type MapStateToPropsType = {
    stateDialogsPage: InitialStateType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
}
export type DialogsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        stateDialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

export const DialogsContainer = connect(mapStateToProps, {
    addMessage,
    updateNewMessageText,
})(Dialogs)
