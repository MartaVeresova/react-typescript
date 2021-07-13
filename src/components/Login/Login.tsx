import React from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/formsControls/FormsControls';
import {requiredField} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';

// type FormDataType = {
//     email: string | null
//     password: string | null
//     rememberMe: boolean | null
//     captcha: boolean | null
// }
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: boolean
}


const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder={'Email'}
                    name={'email'}
                    component={Input}
                    validate={[requiredField]}
                />
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    name={'password'}
                    component={Input}
                    validate={[requiredField]}
                    type={'password'}
                />
            </div>
            <div>
                <Field
                    type="checkbox"
                    name="rememberMe"
                    component={Input}
                /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

type MapStateToPropsType = {
    captcha: boolean | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: boolean) => void
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    captcha: state.auth.captcha,
    isAuth: state.auth.isAuth
})

export default connect(MapStateToProps, {login})(Login)