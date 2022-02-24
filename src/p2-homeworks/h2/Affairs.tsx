import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import classes from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair// should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99%
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />

    ))

    const setAll = () => { props.setFilter('all')} // need to fix
    const setHigh = () => { props.setFilter('high')}
    const setMiddle = () => { props.setFilter('middle')}
    const setLow = () => { props.setFilter('low')}

    return (
        <div>
            {mappedAffairs}


            <button  className={classes.btn} onClick={setAll}>All</button>
            <button  className={classes.btn} onClick={setHigh}>High</button>
            <button  className={classes.btn} onClick={setMiddle}>Middle</button>
            <button    className={classes.btn} onClick={setLow}>Low</button>

        </div>
    )
}

export default Affairs
