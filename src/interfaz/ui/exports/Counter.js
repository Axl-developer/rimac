import React, { useState } from 'react'
import { useCounter } from '../../../hooks/useCounter'

export const Counter = ({counter,setCounter}) => {
    
    const {counter:count, add, subtract} = useCounter(counter,setCounter)
    
    
    return (
        <div className="Counter">
            <button onClick={() => {subtract()}} className="btn">
                <img src="https://axl-developer.github.io/rimac//assets/svgs/less.svg" alt =""/>
            </button>

            <span>$ {count}</span>

            <button onClick={() => {add()}} className="btn">
                <img src="https://axl-developer.github.io/rimac//assets/svgs/higher.svg" alt =""/>
            </button>
        </div>
    )
}
