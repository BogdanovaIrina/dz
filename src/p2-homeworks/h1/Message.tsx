import React from 'react'
import classes from './Message.module.css'
import HW1 from "./HW1";

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={classes.main}>
            <div><img className={classes.avatar} src={props.avatar} alt=""/></div>
            <div className={classes.container}>
                <p className={classes.name}>{props.name}</p>
                <p className={classes.message}>{props.message}</p>
                <span className={classes.time}>{props.time}</span>
            </div>
        </div>

    )
}
export default Message