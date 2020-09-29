import React from 'react'
import s from './Display.module.css'

type DisplayPropsType = {
    count: number
    max: number
    maxValue: number
    startValue: number
}

function Display(props: DisplayPropsType) {

    if(props.startValue < 0 ||
        props.maxValue < 0||
        props.startValue >= props.maxValue) {
        return <div className={`${s.display}`} style={{color: 'red'}}>Incorrect input!</div>
    }

    return (
        <div className={`${s.display} ${props.count === props.max ? s.maxCount : ''}`}>
            {props.count}
        </div>
    )
}

export default Display;