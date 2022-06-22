import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    return (

        <div className='inner'>
            <h2 className='title'>
                homeworks 11
            </h2>


            {/*should work (должно работать)*/}
            <div className='hwInner'>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className='hwInner'>
                <span>{value1}</span>
                <SuperDoubleRange
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>


        </div>
    )
}

export default HW11
