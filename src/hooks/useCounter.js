import { useState } from "react"


export const useCounter = (counter = 14300) => {
    const [count, setCount] = useState(counter)

    const add = (factor = 100,limit = 16500) => {
        if(count < limit){
            setCount(count + factor)
        }else{
            setCount(count)
        }
        
    }

    const subtract = (factor = 100,limit = 12500) => {
        if(count > limit){
            setCount(count - factor)
        }
    }

    return { count, add, subtract };
}