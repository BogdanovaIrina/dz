import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(10)

    const onChangeRange = (value: [number, number]) => {
        setValue1(value[0]);
        setValue2(value[1]);
    }

    return (
        <div>
            <hr/>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.main5}>
                <div>{value1}</div>
                <div><SuperRange value={value1} onChangeRange={setValue1} max={value2} setValue1={setValue1}
                    // сделать так чтоб value1 изменялось
                /></div>
            </div>
            <div className={s.main}>
                <div>{value1} </div>
                <div><SuperDoubleRange onChangeRange={onChangeRange} min={0} max={10} step={1} value={[value1, value2]}/></div>
                <div> {value2}</div>
            </div>
            <hr/>
            <hr/>
        </div>
    )
}

export default HW11