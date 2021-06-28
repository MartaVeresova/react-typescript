import {addMessage, InitialStateType, updateNewMessageText} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';


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
        stateDialogsPage: state.dialogsPage,
    }
}

export const DialogsContainer = withAuthRedirect(connect(mapStateToProps, {
    addMessage,
    updateNewMessageText,
})(Dialogs))
