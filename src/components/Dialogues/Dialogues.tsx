import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogues.module.css'


export function Dialogues() {
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItem}>
                <div className={s.item}>
                    <NavLink to="/dialogues/1">Marta</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogues/2">Sasha</NavLink>
                </div>
                <div className={`${s.item} ${s.activeLink}`}>
                    <NavLink to="/dialogues/3">Vera</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogues/4">Anton</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogues/5">Vanya</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hello</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}