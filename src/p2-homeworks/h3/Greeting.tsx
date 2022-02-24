import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";
import classes from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    keyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, keyPress} // деструктуризация пропсов
) => {
    const inputClass = error? "classes.error":"classes.input" // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyPress={keyPress} className={inputClass}/>
            <span className={classes.errorMessage}>{error}</span>
            <button className={classes.button} onClick={addUser}>add</button>
            <strong><span className={classes.total}>{totalUsers}</span></strong>
        </div>
    )
}

export default Greeting
