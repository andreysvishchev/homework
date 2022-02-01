import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.Message}>
            <img className={s.Message__avatar} src={props.avatar} alt="img"/>
            <div className={s.Message__info}>
                <h4 className={s.Message__author}>{props.name}</h4>
                <p className={s.Message__text}>{props.message}</p>
                <span className={s.Message__time}>{props.time}</span>
            </div>
        </div>
    )
}

export default Message
