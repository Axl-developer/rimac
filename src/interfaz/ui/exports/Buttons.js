import React from 'react'
import PropTypes from 'prop-types'

export const Buttons = ({text,arrow = false,event}) => {
    return (
        <button onClick={(event)?event:''} className="btn_Primary">{text}
            {(arrow) && <img src="/assets/svgs/rigth_arrow.svg" alt="arrow"/>}
        </button>
    )
}


Buttons.prototype = {
    text: PropTypes.string.isRequired
}