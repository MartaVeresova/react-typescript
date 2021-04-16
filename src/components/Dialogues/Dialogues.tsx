import React from 'react';
import s from './Dialogues.module.css'
import {Message, MessageItemPropsType} from './Message/Message';
import {DialogItem, DialogItemPropsType} from './DialogItem/DialogItem';


export type DialoguesPagePropsType = {
    dialoguesData: Array<DialogItemPropsType>
    messagesData: Array<MessageItemPropsType>
}
export type DialoguesPropsType = {
    stateData: DialoguesPagePropsType
}

export function Dialogues(props: DialoguesPropsType) {

    const dialoguesElements = props.stateData.dialoguesData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.stateData.messagesData.map(m => <Message key={m.id} messageContent={m.messageContent}/>)

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