import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsPageType} from '../../redux/state';


export type DialogsPropsType = {
    stateData: DialogsPageType
}

export function Dialogs(props: DialogsPropsType) {

    const dialogsElements = props.stateData.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.stateData.messagesData.map(m => <Message key={m.id} messageContent={m.messageContent}/>)

    const newMessageElement  = React.createRef<HTMLTextAreaElement>()
    const onClickAddMessage = () => {
        alert(newMessageElement.current?.value)
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messagesItem}>
                {messagesElements}
                <div>
                    <textarea className={s.textarea} ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={onClickAddMessage}>Add message</button>
                </div>

            </div>

        </div>
    )
}
