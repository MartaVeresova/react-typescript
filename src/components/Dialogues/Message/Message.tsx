import React from 'react'
import s from './Message.module.css'


export type MessageItemPropsType = {
    id?: number
    messageContent: string
}

export function Message(props: MessageItemPropsType) {
    return (
        <div className={s.message}>{props.messageContent}</div>
    )
}