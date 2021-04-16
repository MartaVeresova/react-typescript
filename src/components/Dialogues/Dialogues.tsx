import React from 'react';
import s from './Dialogues.module.css'
import {Message, MessageItemPropsType} from './Message/Message';
import {DialogItem, DialogItemPropsType} from './DialogItem/DialogItem';

type DialoguesPropsType = {
    dialoguesData: Array<DialogItemPropsType>
    messagesData: Array<MessageItemPropsType>
}

export function Dialogues(props: DialoguesPropsType) {

    const dialoguesElements = props.dialoguesData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.messagesData.map(m => <Message key={m.id} messageContent={m.messageContent}/>)

    return (
        <div className={s.dialogues}>

            <div className={s.dialoguesItem}>
                {dialoguesElements}
            </div>

            <div className={s.messagesItem}>
                {messagesElements}
            </div>

        </div>
    )
}