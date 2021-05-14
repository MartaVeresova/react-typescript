import React from 'react'
import s from './Message.module.css'
import {MessageItemType} from '../../../redux/store';


export function Message(props: MessageItemType) {

    return (
        <div className={s.message}>{props.messageContent}</div>
    )
}