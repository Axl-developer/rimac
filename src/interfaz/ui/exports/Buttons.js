import React from 'react'
import PropTypes from 'prop-types'

export const Buttons = ({text}) => {
    console.log(text)
    return (
        <button className="btn_Primary">{text}</button>
    )
}


Buttons.prototype = {
    text: PropTypes.string.isRequired
}