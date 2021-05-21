import React from 'react'

export const Progress = ({step}) => {
    return (
        <div className="Progress">
            
            <img src="/assets/svgs/back_arrow.svg" alt="arrow"/>

            <span>Paso {step} de 2</span>
            <div id={(step == 2)?'two':''} className="Progress__bar"></div>
        </div>
    )
}
