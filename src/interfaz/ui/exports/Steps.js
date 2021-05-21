import React from 'react'
import PropTypes from 'prop-types'

export const Steps = ({id,actual,setActual}) => {
    return (
        <div onClick={() => setActual(id)} className={(id === actual) ?"active" :"disable"}>

            <div className="Sctep_circle ">
                {id}
            </div>
            
            <span>
                Datos del auto
            </span>
        </div>
    )
}
