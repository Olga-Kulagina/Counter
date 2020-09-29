import React, {ChangeEvent} from 'react';

type CustomizationDisplayPropsType = {
    maxValue: number
    startValue: number
    maxValueChange: (maxValue: number) => void
    startValueChange: (startValue: number) => void
}

function CustomizationDisplay(props: CustomizationDisplayPropsType) {

    let onMaxValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.maxValueChange(Number(e.currentTarget.value));
    }

    let onStartValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.startValueChange(Number(e.currentTarget.value));
    }

    return (
        <div>
            <div>
                <label>max value<input type='number' value={props.maxValue}
                                       onChange={onMaxValueChange}/></label>
            </div>
            <div>
                <label>start value<input type='number' value={props.startValue}
                                         onChange={onStartValueChange}/></label>
            </div>
        </div>
    )
}

export default CustomizationDisplay;