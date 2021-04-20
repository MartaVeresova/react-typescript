import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css'
import {DialogItemType} from '../../../redux/state';





export function DialogItem(props: DialogItemType) {
    const path = '/dialogs/' + props.id

    return (
        <div className={`${s.item} ${s.activeLink}`}>
            <NavLink to={path}>
                <img src='https://upload-98195c5cfe1b3157dfd8c174dd0b71f2.commondatastorage.googleapis.com/iblock/b2b/b2b1c46e9ee3831adb2a3573c2e69e92.jpg' />
                {props.name}
            </NavLink>
        </div>
    )
}