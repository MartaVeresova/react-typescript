import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsPageType} from '../../redux/state';



export type DialogsPropsType = {
    stateData: DialogsPageType
}

export function Dialogs(props: DialogsPropsType) {

    const dialogsElements = props.stateData.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id} />)
    const messagesElements = props.stateData.messagesData.map(m => <Message key={m.id} messageContent={m.messageContent}/>)

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messagesItem}>
                {messagesElements}
            </div>
        </div>
    )
}
