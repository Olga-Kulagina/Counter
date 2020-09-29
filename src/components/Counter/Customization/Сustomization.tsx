import React, {ChangeEvent, useState} from 'react';
import Button from '../Button/Button';
import CustomizationDisplay from './CustomizationDisplay';

type PropsType = {
    count: number
    maxValue: number
    startValue: number
    setCount: (count: number) => void
    setMax: (max: number) => void
    maxValueChange: (maxValue: number) => void
    startValueChange: (startValue: number) => void
    setCustomization: () => void
}

function Customization(props: PropsType) {

    return (
        <div>
            <CustomizationDisplay maxValue={props.maxValue} startValue={props.startValue}
                                  maxValueChange={props.maxValueChange}
                                  startValueChange={props.startValueChange}/>
            <Button title={'set'} callBack={props.setCustomization} disabled={
                props.startValue < 0 ? true : false ||
                props.maxValue < 0 ? true : false ||
                    props.startValue >= props.maxValue}/>
        </div>
    )
}

export default Customization;