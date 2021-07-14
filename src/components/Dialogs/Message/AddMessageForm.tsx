import {maxLengthCreator, requiredField} from '../../../utils/validators/validators';
import React from 'react';
import {Field, InjectedFormProps} from 'redux-form';
import s from '../Dialogs.module.css';
import {Textarea} from '../../common/formsControls/FormsControls';


const maxLength50 = maxLengthCreator(50)


export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    className={s.textarea}
                    placeholder='Enter your message'
                    name='newMessageText'
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


//types
export type FormDataType = {
    newMessageText: string
}