import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './DialogItem.module.css'


export type DialogItemPropsType = {
    id: string
    name: string
}

export function DialogItem(props: DialogItemPropsType) {
    const path = '/dialogues/' + props.id
    return (
        <div className={`${s.item} ${s.activeLink}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}