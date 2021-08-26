import React, {FC, memo, useCallback} from 'react'
import Error404Img from './Error404.png'
import s from './Error404.module.css'
import {useHistory} from 'react-router-dom';


export const Error404: FC = memo(() => {

    const history = useHistory()

    const onClickHandler = useCallback(() => {
        history.goBack()
    }, [history])


    return (
        <div className={s.container}>
            <img src={Error404Img} alt={'Error 404: PAGE NOT FOUND'}/>
            <button
                color={'secondary'}
                onClick={onClickHandler}
            >
                Back
            </button>
        </div>
    )
})