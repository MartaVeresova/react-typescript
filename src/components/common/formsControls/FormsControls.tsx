import React, {FC} from 'react'
import {WrappedFieldProps} from 'redux-form/lib/Field';
import s from './FormsControls.module.css'


const FormControl: FC<WrappedFieldProps> = props => {
    const {meta: {touched, error}, children} = props
    const hasError = touched && error

    return (
        <div className={s.formControl + ' ' + (hasError && s.error)}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}


export const Textarea: FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}