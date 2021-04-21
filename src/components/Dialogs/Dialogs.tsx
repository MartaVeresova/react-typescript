import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {addMessage, DialogsPageType} from '../../redux/state';


export type DialogsPropsType = {
    stateDialogsPage: DialogsPageType
    addMessage: (messageText: string) => void
    updateNewMessageText: (newText: string) => void
}

export function Dialogs(props: DialogsPropsType) {

    const dialogsElements = props.stateDialogsPage.dialogsData.map(d => <DialogItem
        key={d.id} name={d.name}
        id={d.id}/>)
    const messagesElements = props.stateDialogsPage.messagesData.map(m => <Message
        key={m.id}
        messageContent={m.messageContent}/>)

    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const onClickAddMessage = () => {
        if (newMessageElement.current) {
            const text = newMessageElement.current?.value
            addMessage(text)
        }
    }
    const onChangeMessage = () => {
        if (newMessageElement.current) {
            const text = newMessageElement.current?.value
            props.updateNewMessageText(text)
        }
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
                        ref={newMessageElement}
                        value={props.stateDialogsPage.newMessageText}
                        onChange={onChangeMessage}
                    />
                </div>
                <div>
                    <button onClick={onClickAddMessage}>Add message</button>
                </div>

            </div>

        </div>
    )
}
