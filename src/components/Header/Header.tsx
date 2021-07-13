import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import LogoForHeader from '../../assets/images/Logo_header.png';

type PropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

export function Header(props: PropsType) {
    return (
        <header className={s.header}>
            <img
                src={LogoForHeader} alt={''}/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} <button onClick={props.logout}>Log out</button>
                    </div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}