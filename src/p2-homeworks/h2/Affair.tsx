import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void// need to fix any
}

let styleAffair = {
    marginRight: '10px'
}


function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
      props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div>
            <span style={styleAffair}>{props.affair.name}</span>
            <span style={styleAffair}>{props.affair.priority}</span>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
