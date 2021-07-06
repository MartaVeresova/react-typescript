import React from 'react'
import {WrappedFieldProps} from 'redux-form/lib/Field';
import s from './FormsControls.module.css'


export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props

    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + '' + (hasError ? s.error : '')}>
            <div>
                <textarea {...input} {...restProps}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props

    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + '' + (hasError ? s.error : '')}>
            <div>
                <textarea {...input} {...restProps}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}