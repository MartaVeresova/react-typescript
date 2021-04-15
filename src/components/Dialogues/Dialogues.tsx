import React from 'react';
import s from './Dialogues.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';


const dialoguesData = [
    {id: 1, name: 'Marta'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Vera'},
    {id: 4, name: 'Anton'},
    {id: 5, name: 'Vanya'},
]
const messagesData = [
    {id: 1, messageContent: 'Hello'},
    {id: 2, messageContent: 'How are you?'},
    {id: 3, messageContent: 'Yo'},
]

export function Dialogues() {

    const dialoguesElements = dialoguesData.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = messagesData.map(m => <Message messageContent={m.messageContent}/>)

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