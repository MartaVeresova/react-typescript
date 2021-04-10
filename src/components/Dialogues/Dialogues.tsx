import React from 'react';
import s from './Dialogues.module.css'


export function Dialogues() {
    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItem}>
                <div className={s.item}>
                    Marta
                </div>
                <div className={s.item}>
                    Sasha
                </div>
                <div className={`${s.item} ${s.active}`}>
                    Vera
                </div>
                <div className={s.item}>
                    Anton
                </div>
                <div className={s.item}>
                    Vanya
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