import React from 'react';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsType} from './DialogsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, requiredField} from '../../utils/validators/validators';
import {Textarea} from '../common/formsControls/FormsControls';


const maxLength50 = maxLengthCreator(50)

export function Dialogs(props: DialogsType) {

    const dialogsElements = props.stateDialogsPage.dialogsData.map(d => <DialogItem
        key={d.id} name={d.name}
        id={d.id}/>)
    const messagesElements = props.stateDialogsPage.messagesData.map(m => <Message
        key={m.id}
        messageContent={m.messageContent}/>)


    const onClickAddMessage = (formData: FormDataType) => {
        props.addMessage(formData.newMessageText)
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

type FormDataType = {
    newMessageText: string
}

export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    className={s.textarea}
                    placeholder="Enter your message"
                    name="newMessageText"
                    component={Textarea}
                    validate={[requiredField, maxLength50]}
                />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm<FormDataType>({form: 'addMessageForm'})(AddMessageForm)