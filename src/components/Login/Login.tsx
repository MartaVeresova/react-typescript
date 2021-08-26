import React, {FC} from 'react'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../common/formsControls/FormsControls';
import {requiredField} from '../../utils/validators/validators';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import s from '../common/formsControls/FormsControls.module.css'
import {AppStateType} from '../../redux/store';
import {connect} from 'react-redux';


const Login: FC<MapStateToPropsType & MapDispatchToPropsType> = props => {

    const {login, isAuth, captcha} = props

    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captcha={captcha}/>
        </div>
    )
}

type LoginFormPropsType = {
    captcha: string | null
}


const LoginForm: FC<InjectedFormProps<FormDataType, LoginFormPropsType> & LoginFormPropsType> = props => {
    const {handleSubmit, error, captcha} = props

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
            {captcha && <img src={captcha} alt=""/>}
            {captcha &&
            <Field
                placeholder={'Symbols from image'}
                name="captcha"
                validate={[requiredField]}
                component={Input}
            />}
            {error && <div className={s.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType, LoginFormPropsType>({form: 'login'})(LoginForm)


const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    captcha: state.auth.captcha,
    isAuth: state.auth.isAuth
})


//types
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}
type MapStateToPropsType = {
    captcha: string | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}


export default connect(MapStateToProps, {login})(Login)