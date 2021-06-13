import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import LogoForHeader from '../../assets/images/Logo_header.png';

type PropsType = {
    isAuth: boolean
    login: string | null
}

export function Header(props: PropsType) {
    return (
        <header className={s.header}>
            <img
                src={LogoForHeader}/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}