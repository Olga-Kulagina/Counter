import React, {useState} from 'react'
import Display from './Display/Display';
import Button from './Button/Button';
import s from './Counter.module.css'
import Customization from './Customization/Сustomization';

function Counter() {

    let [count, setCount] = useState<number>(4);
    let [max, setMax] = useState<number>(5);

    let [maxValue, setMaxValue] = useState<number>(0);
    let [startValue, setStartValue] = useState<number>(0);

    let maxValueChange = (maxValue: number) => {
        setMaxValue(maxValue);
    }

    let startValueChange = (startValue: number) => {
        setStartValue(startValue);
    }

    let setCustomization = () => {
        setCount(startValue);
        setMax(maxValue);
    }

    let incCount = () => {
        setCount(count + 1);
    }

    let resetCount = () => {
        setCount(0);
    }

    return (
        <div className={s.counter}>
            <div className={s.display}>
                <Display count={count} max={max} maxValue={maxValue} startValue={startValue}/>
            </div>
            <div className={s.buttonsPanel}>
                <Button title={'inc'} callBack={incCount} disabled={count === max ? true : false}/>
                <Button title={'reset'} callBack={resetCount} disabled={count === 0 ? true : false}/>
            </div>
            <div>
                <Customization count={count} setCount={setCount} setMax={setMax}
                               maxValue={maxValue} startValue={startValue}
                               maxValueChange={maxValueChange}
                               startValueChange={startValueChange}
                               setCustomization={setCustomization}/>
            </div>

        </div>
    )
}

export default Counter;