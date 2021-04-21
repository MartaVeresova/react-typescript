import React from 'react'
import s from './Post.module.css'
import {PostType} from '../../../../redux/state';


export function Post(props: PostType) {
    return (
        <div className={s.item}>
            <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"/>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}