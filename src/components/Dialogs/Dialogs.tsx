import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsType} from './DialogsContainer';


export function Dialogs(props: DialogsType) {

    const dialogsElements = props.stateDialogsPage.dialogsData.map(d => <DialogItem
        key={d.id} name={d.name}
        id={d.id}/>)
    const messagesElements = props.stateDialogsPage.messagesData.map(m => <Message
        key={m.id}
        messageContent={m.messageContent}/>)

    const onClickAddMessage = () => {
        props.addMessage()
    }
    const onKeyPressEnter = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        (e.key === 'Enter') && onClickAddMessage()
    }

    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(e.currentTarget.value)
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
                        placeholder="Enter your message"
                        className={s.textarea}
                        onChange={onChangeMessage}
                        value={props.stateDialogsPage.newMessageText}
                        onKeyPress={onKeyPressEnter}
                    />
                </div>
                <div>
                    <button onClick={onClickAddMessage}>Add message</button>
                </div>

            </div>

        </div>
    )
}
