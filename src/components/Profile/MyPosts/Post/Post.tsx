import React, {FC} from 'react'
import s from './Post.module.css'

type PropsType = {
    message: string
    likesCount: number
}

export const Post: FC<PropsType> = ({message, likesCount}) => {
    return (
        <div className={s.item}>
            <img src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg" alt={''}/>
            {message}
            <div>
                <span>{likesCount}</span>
            </div>
        </div>
    )
}