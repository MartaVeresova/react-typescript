import React from 'react'
import {NavLink} from 'react-router-dom';
import s from './DialogItem.module.css'
import {DialogItemType} from '../../../redux/dialogs-reducer';


export function DialogItem(props: DialogItemType) {
    const path = '/dialogs/' + props.id

    return (
        <div className={`${s.item} ${s.activeLink}`}>
            <NavLink to={path}>
                <img src="https://avatars.mds.yandex.net/get-pdb/1025945/a6f96698-c78d-44fb-b802-38e74e0164dd/s1200"/>
                {props.name}
            </NavLink>
        </div>
    )
}