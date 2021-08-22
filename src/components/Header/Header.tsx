import React, {FC} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import LogoForHeader from '../../assets/images/Logo_header.png';

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

export const Header: FC<PropsType> = ({isAuth, login, logout}) => {
    return (
        <header className={s.header}>
            <img
                src={LogoForHeader} alt={''}/>
            <div className={s.loginBlock}>
                {isAuth
                    ? <div>{login} <button onClick={logout}>Log out</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}