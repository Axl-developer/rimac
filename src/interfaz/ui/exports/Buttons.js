import React from 'react'
import PropTypes from 'prop-types'

export const Buttons = ({text,arrow = false}) => {
    console.log('Modificar la flecha deacuerdo al figma')
    return (
        <button className="btn_Primary">{text}
            {(arrow) && <img src="/assets/svgs/rigth_arrow.svg" alt="arrow"/>}
        </button>
    )
}


Buttons.prototype = {
    text: PropTypes.string.isRequired
}