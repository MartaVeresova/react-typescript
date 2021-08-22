import {maxLengthCreator, requiredField} from '../../../utils/validators/validators';
import React, {FC} from 'react';
import {Field, InjectedFormProps} from 'redux-form';
import {Textarea} from '../../common/formsControls/FormsControls';
import s from './MyPosts.module.css';

export type FormDataType = {
    newPostText: string
}
const maxLength10 = maxLengthCreator(10)


export const AddPostForm: FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder='enter text'
                    name='newPostText'
                    component={Textarea}
                    validate={[requiredField, maxLength10]}
                />
            </div>
            <div>
                <button className={s.button}>Add post</button>
            </div>
        </form>
    )
}