import React from 'react';
import s from './Dialogues.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {DialoguesPageType} from '../../redux/state';


export type DialoguesPropsType = {
    stateData: DialoguesPageType
}

export function Dialogues(props: DialoguesPropsType) {

    const dialoguesElements = props.stateData.dialoguesData.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)
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