import React, {FC} from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsType} from './DialogsContainer';
import {reduxForm} from 'redux-form';
import {AddMessageForm, FormDataType} from './Message/AddMessageForm';


export const Dialogs: FC<DialogsType> = ({stateDialogsPage, addMessage}) => {

    const dialogsElements = stateDialogsPage.dialogsData.map(d => <DialogItem
        key={d.id} name={d.name}
        id={d.id}/>)
    const messagesElements = stateDialogsPage.messagesData.map(m => <Message
        key={m.id}
        messageContent={m.messageContent}/>)


    const onClickAddMessage = (formData: FormDataType) => {
        addMessage(formData.newMessageText)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messagesItem}>
                {messagesElements}
                <AddMessageReduxForm onSubmit={onClickAddMessage}/>
            </div>
        </div>
    )
}


const AddMessageReduxForm = reduxForm<FormDataType>({form: 'addMessageForm'})(AddMessageForm)