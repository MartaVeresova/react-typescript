import React from 'react'
import s from './Post.module.css'

type PropsType = {
    message: string
    likesCount: number
}

export function Post(props: PropsType) {
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