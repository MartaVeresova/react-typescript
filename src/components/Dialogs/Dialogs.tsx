import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {ActionsTypes, DialogsPageType} from '../../redux/state';


export type DialogsPropsType = {
    stateDialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

export function Dialogs(props: DialogsPropsType) {
    const dialogsElements = props.stateDialogsPage.dialogsData.map(d => <DialogItem
        key={d.id} name={d.name}
        id={d.id}/>)
    const messagesElements = props.stateDialogsPage.messagesData.map(m => <Message
        key={m.id}
        messageContent={m.messageContent}/>)

    const onClickAddMessage = () => {
        //props.addMessage()
        props.dispatch({type: 'ADD-MESSAGE'})
    }

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //props.updateNewMessageText(e.currentTarget.value)
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: (e.currentTarget.value)})
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messagesItem}>
                {messagesElements}
                <div>
                    <textarea
                        className={s.textarea}
                        onChange={onChangeMessage}
                        value={props.stateDialogsPage.newMessageText}
                    />
                </div>
                <div>
                    <button onClick={onClickAddMessage}>Add message</button>
                </div>

            </div>

        </div>
    )
}
