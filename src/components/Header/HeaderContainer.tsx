import React from 'react'
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {getAuthUserData, logout, setAuthUserData} from '../../redux/auth-reducer';

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    setAuthUserData: (userId: number, email: string, login: string, captcha: boolean, isAuth: boolean ) => void
    getAuthUserData: () => void
    logout: () => void
}

export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<HeaderPropsType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData, getAuthUserData, logout})(HeaderContainer)