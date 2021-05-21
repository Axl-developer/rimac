import { useState } from "react"


export const useCounter = (counter = 14300,setCounter) => {
    
    const add = (factor = 100,limit = 16500) => {
        if(counter < limit){
            setCounter(counter + factor)
        }
        
    }

    const subtract = (factor = 100,limit = 12500) => {
        if(counter > limit){
            setCounter(counter - factor)
        }
    }
    return { counter, add, subtract };
}