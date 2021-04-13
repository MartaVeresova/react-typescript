import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogues.module.css'

export type DialogItemPropsType = {
    name: string
    id: string
}

export type MessagePropsType = {
    messageContent: string
}

export function DialogItem(props: DialogItemPropsType) {
    const path = '/dialogues/' + props.id
    return (
        <div className={`${s.item} ${s.activeLink}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>{props.messageContent}</div>
    )
}


export function Dialogues() {
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItem}>
                <DialogItem name="Marta" id="1"/>
                <DialogItem name="Sasha" id="2"/>
                <DialogItem name="Vera" id="3"/>
                <DialogItem name="Anton" id="4"/>
                <DialogItem name="Vanya" id="5"/>
            </div>
            <div className={s.messages}>
                <Message messageContent="Hello"/>
                <Message messageContent="How are you?"/>
                <Message messageContent="Yo"/>
            </div>
        </div>
    )
}