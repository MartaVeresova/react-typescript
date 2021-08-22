import React, {FC} from 'react'
import s from './Message.module.css'
import {MessageItemType} from '../../../redux/dialogs-reducer';


export const Message: FC<MessageItemType> = ({messageContent}) => {

    return (
        <div className={s.message}>{messageContent}</div>
    )
}