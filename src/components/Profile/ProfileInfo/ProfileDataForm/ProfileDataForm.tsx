import React, {FC} from 'react';
import {ProfileType} from '../../../../redux/profile-reducer';
import {Input, Textarea} from '../../../common/formsControls/FormsControls';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import s from './../../../common/formsControls/FormsControls.module.css'


export const ProfileDataForm: FC<InjectedFormProps<ProfileType, ProfileDataFormPropsType> & ProfileDataFormPropsType> = props => {

    const {handleSubmit, profile, error} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>save</button>
            </div>
            {error && <div className={s.formSummaryError}>{error}</div>}

            <div>
                <b>Full name</b>:
                <Field
                    placeholder={'Full name'}
                    name={'fullName'}
                    component={Input}
                    validate={[]}
                />
            </div>
            <div>
                <b>Looking for a job</b>:
                <Field
                    name={'lookingForAJob'}
                    component={Input}
                    validate={[]}
                    type={'checkbox'}
                />
            </div>
            <div>
                <b>My professional skills</b>:
                <Field
                    placeholder={'My professional skills'}
                    name={'lookingForAJobDescription'}
                    component={Textarea}
                    validate={[]}
                />
            </div>
            <div>
                <b>About me</b>:
                <Field
                    placeholder={'About me'}
                    name={'aboutMe'}
                    component={Textarea}
                    validate={[]}
                />
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}:
                        <Field
                            placeholder={key}
                            name={'contacts.' + key}
                            component={Input}
                            validate={[]}
                        />
                    </b>
                </div>
            })}
            </div>
        </form>
    )
}

export default reduxForm<ProfileType, ProfileDataFormPropsType>({form: 'edit-profile'})(ProfileDataForm)

//types
export type ProfileDataFormPropsType = {
    profile: ProfileType
}