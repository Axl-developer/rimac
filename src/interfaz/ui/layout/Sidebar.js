import React, { useState } from 'react'
import { Steps } from '../exports/Steps'

export const Sidebar = ({Step}) => {

    const [actual, setActual] = useState(Step)

    console.log('Quitar el onClick para cambiar de Step?')
    return (
        <aside className="Sidebar">
            <div className="Sidebar_Steps">
                
                <Steps id={1} actual={actual} setActual={setActual} />

                <div className="Sidebar_Separator">
                    <img src ="/assets/svgs/separator.svg" alt="separator"/>
                </div>

                <Steps id={2} actual={actual} setActual={setActual} />
            </div>
        </aside>
    )
}
